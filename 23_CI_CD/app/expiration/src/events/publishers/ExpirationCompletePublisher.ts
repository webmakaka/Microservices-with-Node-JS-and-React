import {
  SubjectsEnum,
  PublisherAbstract,
  ExpirationCompleteEventInterface,
} from '@grider-ms-tickets/common';

export class ExpirationCompletePublisher extends PublisherAbstract<
  ExpirationCompleteEventInterface
> {
  subject: SubjectsEnum.ExpirationComplete = SubjectsEnum.ExpirationComplete;
}
