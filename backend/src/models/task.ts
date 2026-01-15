export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface ITask {
  id: string;
  title: string;
  dueDate: string;
  priority: TaskPriority;
  completed: boolean;
}
