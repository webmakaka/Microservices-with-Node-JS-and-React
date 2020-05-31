import {
  PublisherAbstract,
  SubjectsEnum,
  TicketUpdatedEventInterface,
} from '@grider-ms-tickets/common';

export class TicketUpdatedPublisher extends PublisherAbstract<
  TicketUpdatedEventInterface
> {
  subject: SubjectsEnum.TicketUpdated = SubjectsEnum.TicketUpdated;
}
