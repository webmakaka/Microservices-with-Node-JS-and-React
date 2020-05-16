import { SubjectsEnum } from './SubjectsEnum';

export interface OrderCancelledEventInterface {
  subject: SubjectsEnum.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
