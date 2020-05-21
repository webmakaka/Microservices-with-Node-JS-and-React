import { SubjectsEnum } from './SubjectsEnum';

export interface PaymentCreatedEventInteface {
  subject: SubjectsEnum.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
