import {
  PublisherAbstract,
  OrderCreatedEventInterface,
  SubjectsEnum,
} from '@grider-ms-tickets/common';

export class OrderCreatedPublisher extends PublisherAbstract<
  OrderCreatedEventInterface
> {
  subject: SubjectsEnum.OrderCreated = SubjectsEnum.OrderCreated;
}
