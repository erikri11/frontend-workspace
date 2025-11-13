import { Priority } from "@shared/types/task";

export interface ITask {
  id: string;
  title: string;
  dueDate: string; 
  priority: Priority;
  completed: boolean;
}
