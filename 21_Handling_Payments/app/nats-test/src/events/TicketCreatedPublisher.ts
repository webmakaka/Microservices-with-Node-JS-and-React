import {
  PublisherAbstract,
  TicketCreatedEventInterface,
  SubjectsEnum,
} from '@grider-ms-tickets/common';

export class TicketCreatedPublisher extends PublisherAbstract<
  TicketCreatedEventInterface
> {
  subject: SubjectsEnum.TicketCreated = SubjectsEnum.TicketCreated;
}
