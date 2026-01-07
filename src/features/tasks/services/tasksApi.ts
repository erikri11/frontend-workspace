import { makeRequest } from '@shared/services/makeRequest';
import { ITask } from '../models/task';

type QueryParams = Record<string, string | number | boolean>;

function toQuery(params?: QueryParams) {
  if (!params) return '';
  const qs = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  ).toString();

  return qs ? `?${qs}` : '';
}

export const TasksApi = {
  get: (params?: QueryParams) => {
    return makeRequest<ITask[]>(`/tasks${toQuery(params)}`);
  },

  post: (task: ITask) => {
    return makeRequest<ITask>('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
    });
  },

  put: (id: string, payload: Partial<ITask>) => {
    return makeRequest<ITask>(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },

  delete: (id: string) => {
    return makeRequest<void>(`/tasks/${id}`, {
      method: 'DELETE',
    });
  },
};
