import { PublisherAbstract } from './PublisherAbstract';
import { TicketCreatedEventInterface } from './TicketCreatedEventInterface';
import { SubjectsEnum } from './SubjectsEnum';

export class TicketCreatedPublisher extends PublisherAbstract<
  TicketCreatedEventInterface
> {
  subject: SubjectsEnum.TicketCreated = SubjectsEnum.TicketCreated;
}
