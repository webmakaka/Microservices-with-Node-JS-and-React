import { SubjectsEnum } from './SubjectsEnum';
import { OrderStatusEnum } from './types/OrderStatusEnum';

export interface OrderCreatedEventInterface {
  subject: SubjectsEnum.OrderCreated;
  data: {
    id: string;
    status: OrderStatusEnum;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
