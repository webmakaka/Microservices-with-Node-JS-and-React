import { Message } from 'node-nats-streaming';
import {
  SubjectsEnum,
  ListenerAbstract,
  TicketUpdatedEventInterface,
} from '@grider-ms-tickets/common';
import { queueGroupName } from './queueGroupName';

import { Ticket } from '../../models/Ticket';

export class TicketUpdatedListener extends ListenerAbstract<
  TicketUpdatedEventInterface
> {
  subject: SubjectsEnum.TicketUpdated = SubjectsEnum.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketUpdatedEventInterface['data'], msg: Message) {
    const ticket = await Ticket.findByEvent(data);

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    const { title, price } = data;

    ticket.set({
      title,
      price,
    });

    await ticket.save();

    msg.ack();
  }
}
