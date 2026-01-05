import './TaskGrid.module.scss';
import { useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Chip } from '@mui/material';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import DataGridTable from '@shared/components/DataGridTable/DataGridTable';
import { PRIORITY_ORDER, PRIORITY_COLOR, Priority } from '@shared/types/task';
import { ITask } from '@features/tasks/models/task';
import TaskUpsertDialog from '../TaskUpsertDialog/TaskUpsertDialog';
import TaskDeleteDialog from '../TaskDeleteDialog/TaskDeleteDialog';
import TaskCompletionChart from '../TaskCompletionChart/TaskCompletionChart';
import { getPriorityLabel } from '@features/tasks/utils/priorityLabel';
import { loadCompletedMap, saveCompletedMap } from '@features/tasks/utils/completedStorage';
import { TaskGridSkeleton } from './TaskGridSkeleton';
import { TaskCompletionChartSkeleton } from '../TaskCompletionChart/TaskCompletionChartSkeleton';
import { useTasks } from './useTasks';

export function TaskGrid() {
  const { t } = useTranslation(['common', 'tasks']);

  const { tasks, setTasks, loading } = useTasks();
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>(() => loadCompletedMap());

  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);
  const [updateTask, setUpdateTask] = useState<ITask | undefined>(undefined);
  const [deleteTask, setDeleteTask] = useState<ITask | undefined>(undefined);

  const toggleAddTaskDialogOpen = () => setIsAddTaskDialogOpen(!isAddTaskDialogOpen);
  const openUpdateTaskDialog = (e: ICellRendererParams) => setUpdateTask(e.data);
  const closeUpdateTaskDialog = () => setUpdateTask(undefined);
  const openDeleteTaskDialog = (e: ICellRendererParams) => setDeleteTask(e.data);
  const closeDeleteTaskDialog = () => setDeleteTask(undefined);

  const priorityChipRenderer = (params: ICellRendererParams) => (
    <Chip 
      label={getPriorityLabel(t, params.value as Priority)} 
      size="small" 
      variant='outlined'  
      color={PRIORITY_COLOR[params.value as keyof typeof PRIORITY_COLOR]} 
    />
  );

  const completedCheckboxRenderer = (params: ICellRendererParams) => {
    const id = params.data?.id;
    if (!id) return null;
    const checked = completedMap[id] ?? !!params.value;

    const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.checked;

      setTasks(prev =>
        prev.map(t =>
          t.id === id ? { ...t, completed: next } : t
        )
      );
      
      params.node.setDataValue('completed', next);

      setCompletedMap(prev => {
        const updated = { ...prev, [id]: next };
        saveCompletedMap(updated);
        return updated;
      });
    };

    return <Checkbox checked={checked} onChange={onToggle} />;
  };

  const updateTaskButtonCellRenderer = (params: ICellRendererParams) => (
    <Button
      variant='contained'
      size='small'
      onClick={() => openUpdateTaskDialog(params)}>
      {t('common:edit')}
    </Button>
  );

  const deleteTaskButtonCellRenderer = (params: ICellRendererParams) => (
    <Button
      variant='contained'
      size='small'
      color='error'
      onClick={() => openDeleteTaskDialog(params)}>
      {t('common:delete')}
    </Button>
  );

  const headers: ColDef<ITask>[] = [
    { field: 'title', headerName: t('common:title'), minWidth: 180, filter: false, flex: 1, rowDrag: true},
    { field: 'dueDate', headerName: t('common:dueDate'), minWidth: 140, filter: false, flex: 1},
    { field: 'priority', headerName: t('common:priority'), minWidth: 100, filter: 'agSetColumnFilter',
      cellRenderer: priorityChipRenderer,
      filterParams: {
        values: PRIORITY_ORDER,
        comparator: (a: Priority, b: Priority) => {
          return PRIORITY_ORDER.indexOf(a) - PRIORITY_ORDER.indexOf(b);
        }
      }
    },
    { field: 'completed', headerName: t('common:completed'), minWidth: 140,
      cellRenderer: completedCheckboxRenderer
    },
    { field: undefined, headerName: "",  minWidth: 200,  filter: false,
      cellRenderer: updateTaskButtonCellRenderer
    },
    { field: undefined, headerName: "",  minWidth: 200,  filter: false,
      cellRenderer: deleteTaskButtonCellRenderer
    }
  ];

  return (
    <>
      {loading ? 
        <>
          <TaskGridSkeleton />
          <TaskCompletionChartSkeleton />
        </> : 
        <>
          <DataGridTable
            data={tasks}
            headers={headers}
            isAddTaskButtonVisible={true}
            onAddTaskClick={toggleAddTaskDialogOpen}
          />
          <TaskCompletionChart tasks={tasks} />
        </>
      }
    
      {isAddTaskDialogOpen &&
        <TaskUpsertDialog 
          open={isAddTaskDialogOpen}
          onClose={toggleAddTaskDialogOpen}
          mode='add'
        />
      }

      {updateTask && 
        <TaskUpsertDialog 
          open={!!updateTask}
          onClose={closeUpdateTaskDialog}
          mode='edit'
          initialTasks={updateTask ?? undefined} 
          taskId={updateTask.id}
        />
      }

      {deleteTask &&
        <TaskDeleteDialog
          onClose={closeDeleteTaskDialog}
          open={!!deleteTask}
          deleteTask={deleteTask}
        />
      }
    </>
  );
}

export default TaskGrid;
