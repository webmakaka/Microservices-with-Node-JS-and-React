import { Message } from 'node-nats-streaming';
import {
  ListenerAbstract,
  OrderCancelledEventInterface,
  SubjectsEnum,
} from '@grider-ms-tickets/common';
import { Ticket } from '../../models/Ticket';
import { queueGroupName } from './queueGroupName';
import { TicketUpdatedPublisher } from '../publishers/TicketUpdatedPublisher';

export class OrderCancelledListener extends ListenerAbstract<
  OrderCancelledEventInterface
> {
  subject: SubjectsEnum.OrderCancelled = SubjectsEnum.OrderCancelled;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCancelledEventInterface['data'], msg: Message) {
    const ticket = await Ticket.findById(data.ticket.id);
    if (!ticket) {
      throw new Error('Ticket not found');
    }

    ticket.set({ orderId: undefined });

    await ticket.save();
    
    await new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      price: ticket.price,
      title: ticket.title,
      userId: ticket.userId,
      orderId: ticket.orderId,
      version: ticket.version,
    });

    msg.ack();
  }
}
