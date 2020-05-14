import { SubjectsEnum } from './SubjectsEnum';

export interface TicketUpdatedEventInterface {
  subject: SubjectsEnum.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
