import { Message } from 'node-nats-streaming';
import {
  ListenerAbstract,
  TicketCreatedEventInterface,
  SubjectsEnum,
} from '@grider-ms-tickets/common';

export class TicketCreatedListener extends ListenerAbstract<
  TicketCreatedEventInterface
> {
  subject: SubjectsEnum.TicketCreated = SubjectsEnum.TicketCreated;
  queueGroupName = 'payments-service';

  onMessage(data: TicketCreatedEventInterface['data'], msg: Message) {
    console.log('Event data! ', data);

    msg.ack();
  }
}
