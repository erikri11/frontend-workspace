export const COMPLETION_FILTERS = ['All', 'Active', 'Completed'] as const;
export type CompletionFilter = (typeof COMPLETION_FILTERS)[number];
