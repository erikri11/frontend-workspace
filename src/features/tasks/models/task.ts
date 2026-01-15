import { Priority } from "./priority";

export interface ITask {
  id: string;
  title: string;
  dueDate: string; 
  priority: Priority;
  completed: boolean;
}
