import { OrderStatus } from "./orderStatus";

export interface IOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}
