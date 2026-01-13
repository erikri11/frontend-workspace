import { ORDER_STATUS_RANK, OrderStatus } from "@features/orders/models/orderStatus";

export const orderStatusCompare = (a?: string, b?: string) =>
  (ORDER_STATUS_RANK[a as OrderStatus] ?? 999) -
  (ORDER_STATUS_RANK[b as OrderStatus] ?? 999);