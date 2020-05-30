import { Message } from 'node-nats-streaming';
import {
  ListenerAbstract,
  OrderCancelledEventInterface,
  SubjectsEnum,
  OrderStatusEnum,
} from '@grider-ms-tickets/common';
import { queueGroupName } from './queueGroupName';
import { Order } from '../../models/Order';

export class OrderCancelledListener extends ListenerAbstract<
  OrderCancelledEventInterface
> {
  subject: SubjectsEnum.OrderCancelled = SubjectsEnum.OrderCancelled;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCancelledEventInterface['data'], msg: Message) {
    const order = await Order.findOne({
      _id: data.id,
      version: data.version - 1,
    });

    if (!order) {
      throw new Error('Order not found');
    }

    order.set({ status: OrderStatusEnum.Cancelled });
    await order.save();

    msg.ack();
  }
}
