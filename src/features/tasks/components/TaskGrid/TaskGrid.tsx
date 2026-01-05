import './TaskGrid.module.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTasks } from './useTasks';
import { createTaskGridColumns } from './taskGridColumns';
import { useCompletedMap } from './useCompletionMap';
import DataGridTable from '@shared/components/DataGridTable/DataGridTable';
import { ITask } from '@features/tasks/models/task';
import TaskUpsertDialog from '../TaskUpsertDialog/TaskUpsertDialog';
import TaskDeleteDialog from '../TaskDeleteDialog/TaskDeleteDialog';
import TaskCompletionChart from '../TaskCompletionChart/TaskCompletionChart';
import { TaskGridSkeleton } from './TaskGridSkeleton';
import { TaskCompletionChartSkeleton } from '../TaskCompletionChart/TaskCompletionChartSkeleton';

export function TaskGrid() {
  const { t } = useTranslation(['common', 'tasks']);

  const { tasks, setTasks, loading } = useTasks();
  const { completedMap, toggleCompleted } = useCompletedMap();

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [updateTask, setUpdateTask] = useState<ITask | undefined>();
  const [deleteTask, setDeleteTask] = useState<ITask | undefined>();

  const headers = createTaskGridColumns({
    t,
    completedMap,
    onToggleCompleted: (id, next) => {
      setTasks(prev =>
        prev.map(t => (t.id === id ? { ...t, completed: next } : t))
      );
      toggleCompleted(id, next);
    },
    onEdit: setUpdateTask,
    onDelete: setDeleteTask
  });

  return (
    <>
      {loading ? (
        <>
          <TaskGridSkeleton />
          <TaskCompletionChartSkeleton />
        </>
      ) : (
        <>
          <DataGridTable
            data={tasks}
            headers={headers}
            isAddTaskButtonVisible
            onAddTaskClick={() => setIsAddOpen(true)}
          />
          <TaskCompletionChart tasks={tasks} />
        </>
      )}

      {isAddOpen && (
        <TaskUpsertDialog
          open
          mode="add"
          onClose={() => setIsAddOpen(false)}
        />
      )}

      {updateTask && (
        <TaskUpsertDialog
          open
          mode="edit"
          taskId={updateTask.id}
          initialTasks={updateTask}
          onClose={() => setUpdateTask(undefined)}
        />
      )}

      {deleteTask && (
        <TaskDeleteDialog
          open
          deleteTask={deleteTask}
          onClose={() => setDeleteTask(undefined)}
        />
      )}
    </>
  );
}

export default TaskGrid;
