import { Message } from 'node-nats-streaming';
import {
  SubjectsEnum,
  ListenerAbstract,
  TicketCreatedEventInterface,
} from '@grider-ms-tickets/common';
import { queueGroupName } from './queueGroupName';

import { Ticket } from '../../models/Ticket';

export class TicketCreatedListener extends ListenerAbstract<
  TicketCreatedEventInterface
> {
  subject: SubjectsEnum.TicketCreated = SubjectsEnum.TicketCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketCreatedEventInterface['data'], msg: Message) {
    const { id, title, price } = data;
    const ticket = Ticket.build({
      id,
      title,
      price,
    });

    await ticket.save();

    msg.ack();
  }
}
