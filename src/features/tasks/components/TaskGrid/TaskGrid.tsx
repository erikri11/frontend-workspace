import './TaskGrid.module.scss';
import { useMemo } from 'react';
import { ColDef } from 'ag-grid-community';
import { ITask, tasks } from '@shared/types/task';
import DataGridTable from '@shared/components/DataGridTable/DataGridTable';

export function TaskGrid() {
  const headers = useMemo<ColDef<ITask>[]>(() => [
    { field: 'title', headerName: 'Title', minWidth: 180, filter: false, flex: 1, rowDrag: true},
    { field: 'dueDate', headerName: 'Due Date', minWidth: 140, filter: false, flex: 1},
    { field: 'priority', headerName: 'Priority', width: 100, filter: 'agSetColumnFilter',
      filterParams: {
        values: ['Low', 'Medium', 'High'],
        comparator: (a: string, b: string) => {
          const order = ['Low', 'Medium', 'High'];
          return order.indexOf(a) - order.indexOf(b);
        }
      }
    },
    { field: 'completed', headerName: 'Completed', width: 140}
  ], []);

  return (
    <DataGridTable
      data={tasks}
      headers={headers}
    />
  );
}

export default TaskGrid;
