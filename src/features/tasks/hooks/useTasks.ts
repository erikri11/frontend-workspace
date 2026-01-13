import { useEffect, useState } from 'react';
import { ITask } from '@features/tasks/models/task';
import { TasksApi } from '@features/tasks/services/tasksApi';
import { loadCompletedMap } from '@features/tasks/utils/completedStorage';

export function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const apiTasks = await TasksApi.get();
        const persisted = loadCompletedMap();

        setTasks(
          apiTasks.map(task => ({
            ...task,
            completed: persisted[task.id] ?? task.completed
          }))
        );
      } catch (err) {
        console.error('Failed to load tasks', err);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  return { tasks, setTasks, loading };
}
