import { ICellRendererParams } from 'ag-grid-community';
import { ChangeEvent } from 'react';
import { ITask } from '@features/tasks/models/task';
import { Checkbox } from '@shared/mui/Checkbox/Checkbox';

interface CompletedRendererProps {
  completedMap: Record<string, boolean>;
  onToggleCompleted: (id: string, next: boolean) => void;
}

export function createCompletedRenderer(props: CompletedRendererProps) {
  return (params: ICellRendererParams<ITask, boolean>) => {
    const id = params.data?.id;
    if (!id) return null;

    const checked = props.completedMap[id] ?? !!params.value;

    const onChange = (_event: ChangeEvent<Element>, next: boolean) => {
      params.node.setDataValue('completed', next);
      props.onToggleCompleted(id, next);
    };

    return <Checkbox checked={checked} onChange={onChange} />;
  };
}
