import { ICellRendererParams } from 'ag-grid-community';
import { Button, ButtonProps } from '@mui/material';
import { TFunction } from 'i18next';
import { ITask } from '@features/tasks/models/task';

interface ActionButtonRendererProps {
  t: TFunction;
  labelKey: string;
  onClick: (task: ITask) => void;
  buttonProps?: Omit<ButtonProps, 'onClick' | 'children'>;
}

export function createActionButtonRenderer(props: ActionButtonRendererProps) {
  const { t, labelKey, onClick, buttonProps } = props;

  return (p: ICellRendererParams<ITask>) => {
    const task = p.data;
    if (!task) return null;

    return (
      <Button
        size="small"
        variant="contained"
        onClick={() => onClick(task)}
        {...buttonProps}
      >
        {t(labelKey)}
      </Button>
    );
  };
}
