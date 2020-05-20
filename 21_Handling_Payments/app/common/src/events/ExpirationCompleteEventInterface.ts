import { SubjectsEnum } from './SubjectsEnum';

export interface ExpirationCompleteEventInterface {
  subject: SubjectsEnum.ExpirationComplete;
  data: {
    orderId: string;
  };
}
