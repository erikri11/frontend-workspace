export const PRIORITY_ORDER = ['Low', 'Medium', 'High'] as const;
export type Priority = (typeof PRIORITY_ORDER)[number];

export const PRIORITY_COLOR: Record<Priority, 'success' |'warning' | 'error'  > = {
  Low: 'success',
  Medium: 'warning',
  High: 'error'
};

export const PRIORITY_RANK: Record<Priority, number> = {
  Low: 0,
  Medium: 1,
  High: 2,
};
