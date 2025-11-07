export type CompletionFilter = (typeof COMPLETION_FILTERS)[number]; 
export type Priority = (typeof PRIORITIES)[number];

export const COMPLETION_FILTERS = ['All', 'Active', 'Completed'] as const;
export const PRIORITIES = ['Low', 'Medium', 'High'] as const;

export const tasks: ITask[] = [
  { title: 'Design wireframes',  dueDate: '2025-10-07', priority: 'High',   completed: false },
  { title: 'Write API contract', dueDate: '2025-10-10', priority: 'Medium', completed: false },
  { title: 'QA regression',      dueDate: '2025-10-15', priority: 'Low',    completed: true  },
  { title: 'QA regression',      dueDate: '2025-10-15', priority: 'Low',    completed: true  },
  { title: 'QA regression',      dueDate: '2025-10-15', priority: 'Low',    completed: true  },
  { title: 'Design wireframes',  dueDate: '2025-10-07', priority: 'High',   completed: false },
  { title: 'Write API contract', dueDate: '2025-10-10', priority: 'Medium', completed: false },
  { title: 'QA regression',      dueDate: '2025-10-15', priority: 'Low',    completed: true  },
  { title: 'QA regression',      dueDate: '2025-10-15', priority: 'Low',    completed: true  },
  { title: 'QA regression',      dueDate: '2025-10-15', priority: 'Low',    completed: true  }
];

export interface ITask {
  title: string;
  dueDate: string; 
  priority: Priority;
  completed: boolean;
}