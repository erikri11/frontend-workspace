import { TFunction } from 'i18next';
import { OrderStatus } from '../models/orderStatus';

export const getOrderStatusLabel = (t: TFunction, p: OrderStatus) =>
  t(`orders:ordersByStatus.${p.toLowerCase()}`);
