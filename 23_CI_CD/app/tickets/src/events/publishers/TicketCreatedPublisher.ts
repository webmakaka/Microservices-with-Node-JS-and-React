import {
  PublisherAbstract,
  SubjectsEnum,
  TicketCreatedEventInterface,
} from '@grider-ms-tickets/common';

export class TicketCreatedPublisher extends PublisherAbstract<
  TicketCreatedEventInterface
> {
  subject: SubjectsEnum.TicketCreated = SubjectsEnum.TicketCreated;
}
