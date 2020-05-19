import { Message } from 'node-nats-streaming';
import {
  ListenerAbstract,
  OrderCreatedEventInterface,
  SubjectsEnum,
} from '@grider-ms-tickets/common';
import { queueGroupName } from './queueGroupName';

export class OrderCreatedListener extends ListenerAbstract<
  OrderCreatedEventInterface
> {
  subject: SubjectsEnum.OrderCreated = SubjectsEnum.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEventInterface['data'], msg: Message) {}
}
