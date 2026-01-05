import { Button, Checkbox, Chip } from '@mui/material';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { TFunction } from 'i18next';
import { ITask } from '@features/tasks/models/task';
import { PRIORITY_COLOR, PRIORITY_ORDER, Priority } from '@shared/types/task';
import { getPriorityLabel } from '@features/tasks/utils/priorityLabel';

interface ColumnArgsProps {
  t: TFunction;
  completedMap: Record<string, boolean>;
  onToggleCompleted: (id: string, next: boolean) => void;
  onEdit: (task: ITask) => void;
  onDelete: (task: ITask) => void;
}

export function createTaskGridColumns(props: ColumnArgsProps): ColDef<ITask>[] {

  const priorityRenderer = (params: ICellRendererParams) => (
    <Chip
      label={getPriorityLabel(props.t, params.value as Priority)}
      size="small"
      variant="outlined"
      color={PRIORITY_COLOR[params.value as keyof typeof PRIORITY_COLOR]}
    />
  );

  const completedRenderer = (params: ICellRendererParams) => {
    const id = params.data?.id;
    if (!id) return null;

    const checked = props.completedMap[id] ?? !!params.value;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.checked;
      params.node.setDataValue('completed', next);
      props.onToggleCompleted(id, next);
    };

    return <Checkbox checked={checked} onChange={onChange} />;
  };

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
      filterParams: {
        values: PRIORITY_ORDER,
        comparator: (a: Priority, b: Priority) =>
          PRIORITY_ORDER.indexOf(a) - PRIORITY_ORDER.indexOf(b)
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
      cellRenderer: (p: ICellRendererParams) => (
        <Button size="small" variant="contained" onClick={() => props.onEdit(p.data)}>
          {props.t('common:edit')}
        </Button>
      )
    },
    {
      headerName: '',
      minWidth: 160,
      cellRenderer: (p: ICellRendererParams) => (
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => props.onDelete(p.data)}
        >
          {props.t('common:delete')}
        </Button>
      )
    }
  ];
}
