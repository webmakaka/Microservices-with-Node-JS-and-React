import {
  PublisherAbstract,
  OrderCancelledEventInterface,
  SubjectsEnum,
} from '@grider-ms-tickets/common';

export class OrderCancelledPublisher extends PublisherAbstract<
  OrderCancelledEventInterface
> {
  subject: SubjectsEnum.OrderCancelled = SubjectsEnum.OrderCancelled;
}
