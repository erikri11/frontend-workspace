import { makeRequest } from "@shared/services/makeRequest";
import { ITask } from "../models/task";

export const TasksApi = {
  get: (params?: Record<string, string | number | boolean>) => {
    const query = params
      ? `?${new URLSearchParams(
          Object.fromEntries(
            Object.entries(params).map(([k, v]) => [k, String(v)])
          )
        ).toString()}`
      : '';
    return makeRequest<ITask[]>(`/tasks${query}`);
  },
  post: (task: ITask) => {
    return makeRequest<ITask>('/tasks', {
      method: 'POST',
      body: JSON.stringify(task)
    });
  },
  put: (id: string, payload: Partial<ITask>) => {
    return makeRequest<ITask>(`/tasks/${id}`, { 
      method: 'PUT', 
      body: JSON.stringify(payload) 
    });
  },
  delete: (id: string) => {
    return makeRequest<void>(`/tasks/${id}`, {
      method: 'DELETE' 
    });
  }  
};
