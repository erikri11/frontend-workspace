import { TFunction } from 'i18next';
import { ColDef } from 'ag-grid-community';
import { priorityRenderer } from './renderers/priorityRenderer';
import { createCompletedRenderer } from './renderers/createCompletedRenderer';
import { taskPriorityCompare } from './comparators/taskPriorityCompare';
import { ITask } from '@features/tasks/models/task';
import { PRIORITY_ORDER } from '@features/tasks/models/priority';
import { createActionButtonRenderer } from './renderers/createActionButtonRenderer';

interface ColumnArgsProps {
  t: TFunction;
  completedMap: Record<string, boolean>;
  onToggleCompleted: (id: string, next: boolean) => void;
  onEdit: (task: ITask) => void;
  onDelete: (task: ITask) => void;
}

export function createTaskGridColumns(props: ColumnArgsProps): ColDef<ITask>[] {

  const completedRenderer = createCompletedRenderer({
    completedMap: props.completedMap,
    onToggleCompleted: props.onToggleCompleted
  });

  const editRenderer = createActionButtonRenderer({
    t: props.t,
    labelKey: 'common:edit',
    onClick: props.onEdit,
  });

  const deleteRenderer = createActionButtonRenderer({
    t: props.t,
    labelKey: 'common:delete',
    onClick: props.onDelete,
    buttonProps: { color: 'error' },
  });

  return [
    {
      field: 'title',
      headerName: props.t('common:title'),
      flex: 1,
      minWidth: 180,
      rowDrag: true
    },
    {
      field: 'dueDate',
      headerName: props.t('common:dueDate'),
      minWidth: 140
    },
    {
      field: 'priority',
      headerName: props.t('common:priority'),
      minWidth: 120,
      cellRenderer: priorityRenderer,
      filter: 'agSetColumnFilter',
      comparator: taskPriorityCompare,
      filterParams: {
        values: PRIORITY_ORDER,
        comparator: taskPriorityCompare
      }
    },
    {
      field: 'completed',
      headerName: props.t('common:completed'),
      minWidth: 140,
      cellRenderer: completedRenderer
    },
    {
      headerName: '',
      minWidth: 160,
      cellRenderer: editRenderer
    },
    {
      headerName: '',
      minWidth: 160,
      cellRenderer: deleteRenderer
    }
  ];
}
