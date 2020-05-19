import { Message } from 'node-nats-streaming';
import {
  ListenerAbstract,
  OrderCreatedEventInterface,
  SubjectsEnum,
} from '@grider-ms-tickets/common';
import { queueGroupName } from './queueGroupName';
import { expirationQueue } from '../../queues/expiration-queue';

export class OrderCreatedListener extends ListenerAbstract<
  OrderCreatedEventInterface
> {
  subject: SubjectsEnum.OrderCreated = SubjectsEnum.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEventInterface['data'], msg: Message) {
    const delay = new Date(data.expiresAt).getTime() - new Date().getTime();

    await expirationQueue.add(
      {
        orderId: data.id,
      },
      {
        delay,
      }
    );

    msg.ack();
  }
}
