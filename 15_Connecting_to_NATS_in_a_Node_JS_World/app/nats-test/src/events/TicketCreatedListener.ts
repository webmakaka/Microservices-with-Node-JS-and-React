import { Message } from 'node-nats-streaming';
import { ListenerAbstract } from './ListenerAbstract';
import { TicketCreatedEventInterface } from './TicketCreatedEventInterface';
import { SubjectsEnum } from './SubjectsEnum';

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
