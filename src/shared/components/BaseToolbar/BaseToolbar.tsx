import './BaseToolbar.module.scss';
import { TextField } from '@mui/material';

export interface BaseToolbarProps {
  quickFilter: string;
  setQuickFilter: (value: string) => void;
}

export function BaseToolbar(props: BaseToolbarProps) {
  const search = (e: React.ChangeEvent<HTMLInputElement>) => props.setQuickFilter(e.target.value);

  return (
    <TextField
      label="Søk"
      type="search"
      name='quickFilter'
      variant='filled'
      size='small'
      onChange={search}
      value={props.quickFilter}
      className='mb-3'
    />
  );
}

export default BaseToolbar;
