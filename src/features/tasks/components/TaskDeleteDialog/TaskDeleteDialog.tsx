import './TaskDeleteDialog.module.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { theme } from '@shared/theme/mui/theme';
import { TasksApi } from '@features/tasks/services/tasksApi';
import { ITask } from '@features/tasks/models/task';

export interface TaskDeleteDialogProps {
  open: boolean;
  onClose: () => void;
  deleteTask?: ITask;
}

export function TaskDeleteDialog(props: TaskDeleteDialogProps) {
  const handleDeleteTask = async () => { 
    try {
      if (props.deleteTask?.id) {
        await TasksApi.delete(props.deleteTask.id);
        console.log('Deleting task with id:', props.deleteTask.id);
      }
      props.onClose();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <Dialog 
    open={props.open} 
    onClose={props.onClose}>
      <DialogTitle>Confirm delete</DialogTitle>
      <DialogContent>
        <Typography sx={{ mt: 1 }}>
          Are you sure you want to delete this item?
          </Typography>
        <Typography sx={{ mt: 1 }} color={theme.typography.subtitle2.color}>
          {props.deleteTask?.title}
          </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={props.onClose}>Cancel</Button>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handleDeleteTask}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskDeleteDialog;
