import './TaskGrid.module.scss';
import { useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Chip } from '@mui/material';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import DataGridTable from '@shared/components/DataGridTable/DataGridTable';
import { PRIORITIES, PRIORITY_COLOR } from '@shared/types/task';
import { ITask } from '@features/tasks/models/task';
import { TasksApi } from '@features/tasks/services/tasksApi';
import TaskUpsertDialog from '../TaskUpsertDialog/TaskUpsertDialog';
import TaskDeleteDialog from '../TaskDeleteDialog/TaskDeleteDialog';
import TaskCompletionChart from '../TaskCompletionChart/TaskCompletionChart';

export function TaskGrid() {
  const { t } = useTranslation('tasks');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);
  const [updateTask, setUpdateTask] = useState<ITask | undefined>(undefined);
  const [deleteTask, setDeleteTask] = useState<ITask | undefined>(undefined);

  const toggleAddTaskDialogOpen = () => setIsAddTaskDialogOpen(!isAddTaskDialogOpen);
  const openUpdateTaskDialog = (e: ICellRendererParams) => setUpdateTask(e.data);
  const closeUpdateTaskDialog = () => setUpdateTask(undefined);
  const openDeleteTaskDialog = (e: ICellRendererParams) => setDeleteTask(e.data);
  const closeDeleteTaskDialog = () => setDeleteTask(undefined);

  useEffect(() => {
    if (tasks.length) return;
    const loadInitTasks = async () => {
      try {
        const res = await TasksApi.get();
        setTasks(res);
      } catch (err) {
        console.error('Failed to load initial tasks', err);
      }
    };
    loadInitTasks();
  }, [setTasks, tasks.length]);

  const priorityChipRenderer = (params: ICellRendererParams) => (
    <Chip 
      label={params.value} 
      size="small" 
      variant='outlined'  
      color={PRIORITY_COLOR[params.value as keyof typeof PRIORITY_COLOR]} 
    />
  );

  const completedCheckboxRenderer = (params: ICellRendererParams) => {
    const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.checked;
      const id = params.data?.id;
      if (!id) return;
      setTasks(prev => 
        prev.map(t => t.id === id ? { ...t, completed: next } : t)
      );
      params.node.setDataValue('completed', next);
      console.log(`Task ${params.data?.id} toggled: `, next);
    };
    return <Checkbox checked={!!params.value} onChange={onToggle} />;
  };

  const updateTaskButtonCellRenderer = (params: ICellRendererParams) => (
    <Button
      variant='contained'
      size='small'
      onClick={() => openUpdateTaskDialog(params)}>
      Edit
    </Button>
  );

  const deleteTaskButtonCellRenderer = (params: ICellRendererParams) => (
    <Button
      variant='contained'
      size='small'
      color='error'
      onClick={() => openDeleteTaskDialog(params)}>
      Delete
    </Button>
  );

  const headers: ColDef<ITask>[] = [
    { field: 'title', headerName: 'Title', minWidth: 180, filter: false, flex: 1, rowDrag: true},
    { field: 'dueDate', headerName: 'Due Date', minWidth: 140, filter: false, flex: 1},
    { field: 'priority', headerName: 'Priority', minWidth: 100, filter: 'agSetColumnFilter',
      cellRenderer: priorityChipRenderer,
      filterParams: {
        values: PRIORITIES,
        comparator: (a: string, b: string) => {
          const order = ['Low', 'Medium', 'High'];
          return order.indexOf(a) - order.indexOf(b);
        }
      }
    },
    { field: 'completed', headerName: 'Completed', minWidth: 140,
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
      <DataGridTable
        data={tasks}
        headers={headers}
        isAddTaskButtonVisible={true}
        onAddTaskClick={toggleAddTaskDialogOpen}
      />

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

      <TaskCompletionChart tasks={tasks} />
    </>
  );
}

export default TaskGrid;
