import { SubjectsEnum } from './SubjectsEnum';

export interface OrderCancelledEventInterface {
  subject: SubjectsEnum.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
