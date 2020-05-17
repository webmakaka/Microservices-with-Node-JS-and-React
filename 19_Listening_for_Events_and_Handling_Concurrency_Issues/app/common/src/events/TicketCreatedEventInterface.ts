import { SubjectsEnum } from './SubjectsEnum';

export interface TicketCreatedEventInterface {
  subject: SubjectsEnum.TicketCreated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}
