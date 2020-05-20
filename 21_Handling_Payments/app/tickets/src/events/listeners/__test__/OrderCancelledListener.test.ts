import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';
import { OrderCancelledEventInterface } from '@grider-ms-tickets/common';
import { OrderCancelledListener } from '../OrderCancelledListener';
import { natsWrapper } from '../../../NatsWrapper';
import { Ticket } from '../../../models/Ticket';

const setup = async () => {
  const listener = new OrderCancelledListener(natsWrapper.client);

  const orderId = mongoose.Types.ObjectId().toHexString();

  const ticket = Ticket.build({
    title: 'concert',
    price: 99,
    userId: 'asdf',
  });

  ticket.set({ orderId });
  await ticket.save();

  const data: OrderCancelledEventInterface['data'] = {
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    ticket: {
      id: ticket.id,
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, ticket, data, msg, orderId };
};

it('updates the ticket, publishes an event and acks the message', async () => {
  const { listener, ticket, data, msg, orderId } = await setup();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);
  expect(updatedTicket!.orderId).not.toBeDefined();
  expect(msg.ack).toHaveBeenCalled();
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
