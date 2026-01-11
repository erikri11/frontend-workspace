import './TaskUpsertDialog.module.scss';
import { ChangeEvent, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { format} from 'date-fns';
import { PRIORITY_ORDER, Priority } from '@shared/types/task';
import { validateDueDate, validatePriority, validateTitle } from '@features/tasks/validation/validateTask';
import { Mode } from '@features/tasks/models/mode';
import { ITaskError } from '@features/tasks/models/taskError';
import { TasksApi } from '@features/tasks/services/tasksApi';
import { ITask } from '@features/tasks/models/task';
import { getPriorityLabel } from '@features/tasks/utils/priorityLabel';
import { useSnackbar } from '@shared/context/snackbar/useSnackbar';

export interface TaskUpsertDialogProps {
  open: boolean;
  onClose: () => void;
  mode: Mode;
  initialTasks?: ITask;
  taskId?: string;
}

export function TaskUpsertDialog(props: TaskUpsertDialogProps) {
  const { t } = useTranslation('tasks');
  const [title, setTitle] = useState<string>(props.initialTasks?.title || '');
  const [dueDate, setDueDate] = useState<Date | null>(props.initialTasks ? new Date(props.initialTasks.dueDate) : null);
  const [priority, setPriority] = useState<Priority | ''>(props.initialTasks?.priority || '');
  const [errors, setErrors] = useState<ITaskError>({});
  
  const { setSnackbarMessage } = useSnackbar();
  
  const canSubmit = useMemo(() => {
    const err = {
      title: validateTitle(title),
      dueDate: validateDueDate(dueDate),
      priority: validatePriority(priority),
    };
    return Object.values(err).every(val => !val);
  }, [title, dueDate, priority]);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value;
    setTitle(v);
    setErrors(prev => ({
      ...prev, 
        title: v.trim() ? undefined : prev.title
    }));
  };

  const handlePriorityChange = (event: SelectChangeEvent<Priority | ''>) => {
    setPriority(event.target.value as Priority | '');
  };

  const handleUpsertTask = async () => { 
    const task: ITask = { 
      id: props.taskId || '', 
      title: title.trim(),
      dueDate: format(dueDate as Date, 'yyyy-MM-dd'),
      priority: priority as Priority, 
      completed: props.initialTasks?.completed || false
    }; 
    
    try {
      if (props.mode === 'add') {
        await TasksApi.post(task);
        console.log('Adding task:', task);
        setSnackbarMessage({ content: t("tasks:snackbar.addSuccess"), type: "success" });
      } else if (props.mode === 'edit' && props.taskId) {
        await TasksApi.put(props.taskId, task);
        console.log('Updating task:', task);
        setSnackbarMessage({ content: t("tasks:snackbar.editSuccess"), type: "success" });
      }
      props.onClose();
    } catch (error) {
      console.error('Error upserting task:', error);
      setSnackbarMessage({ content: t("tasks:snackbar.editError"), type: "error" });
    }
  };

  return (
      <Dialog 
        open={props.open} 
        onClose={props.onClose} 
        fullWidth 
        maxWidth="sm"
      >
        <DialogTitle>
          {props.mode === 'add' ? t('tasks:actions.add') : t('tasks:actions.edit')}
        </DialogTitle>
        <DialogContent className='pt-3'>
          <Grid container spacing={2}>
            <Grid size={{ md: 6 }}>
              <Stack useFlexGap spacing={2}>
                <TextField
                  label={t('common:title')}
                  value={title || ''}
                  fullWidth
                  onChange={handleTitleChange}
                  error={!!errors.title}
                  helperText={errors.title}
                />
                <DatePicker
                  label={t('common:dueDate')}
                  value={dueDate || null}
                  onChange={(d) => setDueDate(d)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.dueDate,
                      helperText: errors.dueDate
                    }
                  }}
                />
                <FormControl fullWidth error={!!errors.priority}>
                  <InputLabel id="priority-label">Prioritet</InputLabel>
                  <Select
                    labelId="priority-label"
                    label={t('common:priority')}
                    value={priority}
                    onChange={handlePriorityChange}
                  >
                    <MenuItem value="" disabled><em>{t('tasks:selectAPriority')}</em></MenuItem>
                    {PRIORITY_ORDER.map((p: Priority) => (
                      <MenuItem key={p} value={p}>
                        {getPriorityLabel(t, p)}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText error>{errors.priority}</FormHelperText>
                </FormControl>
              </Stack>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={props.onClose}>{t('common:cancel')}</Button>
          <Button variant="contained" onClick={handleUpsertTask} disabled={!canSubmit}>
            {props.mode === 'add' ? t('common:add') : t('common:save')}
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default TaskUpsertDialog;
