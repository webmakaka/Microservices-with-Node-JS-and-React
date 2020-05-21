import { Message } from 'node-nats-streaming';
import {
  SubjectsEnum,
  ListenerAbstract,
  PaymentCreatedEventInteface,
  OrderStatusEnum,
} from '@grider-ms-tickets/common';
import { queueGroupName } from './queueGroupName';
import { Order } from '../../models/Order';

export class PaymentCreatedListener extends ListenerAbstract<
  PaymentCreatedEventInteface
> {
  subject: SubjectsEnum.PaymentCreated = SubjectsEnum.PaymentCreated;

  queueGroupName = queueGroupName;

  async onMessage(data: PaymentCreatedEventInteface['data'], msg: Message) {
    const order = await Order.findById(data.orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    order.set({
      status: OrderStatusEnum.Complete,
    });

    await order.save();

    msg.ack();
  }
}
