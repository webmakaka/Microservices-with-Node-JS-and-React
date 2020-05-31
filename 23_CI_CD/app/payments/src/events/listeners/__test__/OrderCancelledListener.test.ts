import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';
import {
  OrderCancelledEventInterface,
  OrderStatusEnum,
} from '@grider-ms-tickets/common';
import { natsWrapper } from '../../../NatsWrapper';
import { OrderCancelledListener } from '../OrderCancelledListener';
import { Order } from '../../../models/Order';

const setup = async () => {
  const listener = new OrderCancelledListener(natsWrapper.client);

  const order = Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    status: OrderStatusEnum.Created,
    price: 10,
    userId: 'alskdjf',
    version: 0,
  });

  await order.save();

  const data: OrderCancelledEventInterface['data'] = {
    id: order.id,
    version: order.version + 1,
    ticket: {
      id: 'alskdjf',
    },
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg, order };
};

it('updates the status of the order', async () => {
  const { listener, data, msg, order } = await setup();

  await listener.onMessage(data, msg);

  const updateOrder = await Order.findById(order.id);

  expect(updateOrder!.status).toEqual(OrderStatusEnum.Cancelled);
});

it('acks the message', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
