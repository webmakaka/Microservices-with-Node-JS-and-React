import { SubjectsEnum } from './SubjectsEnum';

export interface TicketUpdatedEventInterface {
  subject: SubjectsEnum.TicketUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    orderId?: string;
  };
}
