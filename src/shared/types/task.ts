export type CompletionFilter = (typeof COMPLETION_FILTERS)[number]; 
export type Priority = (typeof PRIORITY_ORDER)[number];

export const PRIORITY_COLOR: Record<Priority, 'error' | 'warning' | 'success'> = { High: 'error', Medium: 'warning', Low: 'success' };
export const COMPLETION_FILTERS = ['All', 'Active', 'Completed'] as const;
export const PRIORITY_ORDER = ['Low', 'Medium', 'High'] as const;
