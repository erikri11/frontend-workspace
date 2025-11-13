import { Priority } from "@shared/types/task";
import { isValid } from "date-fns";

 export const validateTitle = (title: string) => {
    return (!title.trim()) ? 'Title is required' : undefined; 
  };

  export const validateDueDate = (date: Date | null) => {
    return (!date || !isValid(date)) ? 'Valid date is required' : undefined;
  };

  export const validatePriority = (priority: Priority | '') => {
    return (!priority) ? 'Priority is required' : undefined;
  };
