import './BaseToolbar.module.scss';
import { Add } from '@mui/icons-material';
import { Button, Divider, Stack, TextField } from '@mui/material';

export interface BaseToolbarProps {
  quickFilter: string;
  setQuickFilter: (value: string) => void;
  isAddTaskButtonVisible?: boolean;
  onAddTaskClick?: () => void;
}

export function BaseToolbar(props: BaseToolbarProps) {
  const search = (e: React.ChangeEvent<HTMLInputElement>) => props.setQuickFilter(e.target.value);

  return (
    <Stack direction="row" spacing={2} className='mb-3'>
      <TextField
        label="Søk"
        type="search"
        name='quickFilter'
        variant='filled'
        size='small'
        onChange={search}
        value={props.quickFilter}
      />

      {props.isAddTaskButtonVisible && <>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button 
          variant="contained" 
          startIcon={<Add />}
          onClick={props.onAddTaskClick}
        >
          Add Task
        </Button>
      </>}
    </Stack>
  );
}

export default BaseToolbar;
