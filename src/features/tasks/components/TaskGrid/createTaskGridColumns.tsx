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
  const { t, completedMap, onToggleCompleted, onEdit, onDelete } = props;

  const completedRenderer = createCompletedRenderer({
    completedMap: completedMap,
    onToggleCompleted: onToggleCompleted
  });

  const editRenderer = createActionButtonRenderer({
    t: t,
    labelKey: 'common:edit',
    onClick: onEdit,
  });

  const deleteRenderer = createActionButtonRenderer({
    t: t,
    labelKey: 'common:delete',
    onClick: onDelete,
    buttonProps: { color: 'error' },
  });

  return [
    {
      field: 'id',
      headerName: t('common:id'),
      minWidth: 180
    },
    {
      field: 'title',
      headerName: t('common:title'),
      minWidth: 180,
      flex: 1
    },
    {
      field: 'dueDate',
      headerName: t('common:dueDate'),
      minWidth: 140
    },
    {
      field: 'priority',
      headerName: t('common:priority'),
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
      headerName: t('common:completed'),
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
