import { PRIORITY_ORDER } from '@shared/types/task';

export interface MockTask {
  id: string;
  priority: (typeof PRIORITY_ORDER)[number];
  completed: boolean;
  title: string;
  dueDate: string;
}

export function createMockTasks(): MockTask[] {
  return PRIORITY_ORDER.map((priority, index) => ({
    id: String(index),
    priority,
    completed: index % 2 === 0,
    title: `Task ${index}`,
    dueDate: '2026-01-01T00:00:00.000Z'
  }));
}
