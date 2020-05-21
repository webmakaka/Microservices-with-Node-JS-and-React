import {
  SubjectsEnum,
  PublisherAbstract,
  PaymentCreatedEventInteface,
} from '@grider-ms-tickets/common';

export class PaymentCreatedPublisher extends PublisherAbstract<
  PaymentCreatedEventInteface
> {
  subject: SubjectsEnum.PaymentCreated = SubjectsEnum.PaymentCreated;
}
