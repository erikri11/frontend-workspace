import { CurrencyEnum } from "./currency";

export type OrderStatus = 'Pending' | 'Completed' | 'Cancelled';

export interface IOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  currency?: CurrencyEnum;
}
