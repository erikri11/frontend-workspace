export const ORDER_STATUSES = ['Completed', 'Pending', 'Cancelled'] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const ORDER_STATUS_COLOR: Record<OrderStatus, 'success' | 'warning' | 'error' > = {
  Completed: 'success',
  Pending: 'warning',
  Cancelled: 'error'
};

export const ORDER_STATUS_RANK: Record<OrderStatus, number> = {
  Completed: 0,
  Pending: 1,
  Cancelled: 2,
};
