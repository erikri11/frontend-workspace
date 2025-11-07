export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface ITask {
  title: string;
  dueDate: string;    
  priority: TaskPriority;
  completed: boolean;
}
