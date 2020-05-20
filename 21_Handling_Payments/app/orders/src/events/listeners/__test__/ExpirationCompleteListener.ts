import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';
import {
  OrderStatusEnum,
  ExpirationCompleteEventInterface,
} from '@grider-ms-tickets/common';
import { natsWrapper } from '../../../NatsWrapper';
import { Order } from '../../../models/Order';
import { Ticket } from '../../../models/Ticket';

import { ExpirationCompleteListener } from '../ExpirationCompleteListener';

const setup = async () => {
  const listener = new ExpirationCompleteListener(natsWrapper.client);

  const ticket = Ticket.build({
    id: mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 20,
  });

  await ticket.save();

  const order = Order.build({
    status: OrderStatusEnum.Created,
    userId: 'sdfadsf',
    expiresAt: new Date(),
    ticket,
  });

  await order.save();

  const data: ExpirationCompleteEventInterface['data'] = {
    orderId: order.id,
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, order, ticket, data, msg };
};

it('updates the order status to cancelled', async () => {
  const { listener, order, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);
  expect(updatedOrder!.status).toEqual(OrderStatusEnum.Cancelled);
});

it('emit an OrderCancelled event', async () => {
  const { listener, order, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(natsWrapper.client.publish).toHaveBeenCalled();

  const eventData = JSON.parse(
    (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
  );

  expect(eventData.id).toEqual(order.id);
});

it('ack the message', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
