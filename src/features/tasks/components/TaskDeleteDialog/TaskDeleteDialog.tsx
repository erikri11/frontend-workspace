import './TaskDeleteDialog.module.scss';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { theme } from '@shared/theme/mui/theme';
import { TasksApi } from '@features/tasks/services/tasksApi';
import { ITask } from '@features/tasks/models/task';
import { SnackbarContext } from '@shared/context/SnackbarContext';

export interface TaskDeleteDialogProps {
  open: boolean;
  onClose: () => void;
  deleteTask?: ITask;
}

export function TaskDeleteDialog(props: TaskDeleteDialogProps) {
  const { t } = useTranslation(['common', 'tasks']);
  const { setSnackbarMessage } = useContext(SnackbarContext);
  
  const handleDeleteTask = async () => { 
    try {
      if (props.deleteTask?.id) {
        await TasksApi.delete(props.deleteTask.id);
        console.log('Deleting task with id:', props.deleteTask.id);
        setSnackbarMessage({ content: t("tasks:snackbar.deleteSuccess"), type: "success" });
      }
      props.onClose();
    } catch (error) {
      console.error('Error deleting task:', error);
      setSnackbarMessage({ content: t("tasks:snackbar.deleteError"), type: "error" });
    }
  };

  return (
    <Dialog 
      open={props.open} 
      onClose={props.onClose}
    >
      <DialogTitle>{t('common:confirmDelete')}</DialogTitle>
      <DialogContent>
        <Typography sx={{ mt: 1 }}>
          {t('common:confirmDeleteMessage')}
          </Typography>
        <Typography sx={{ mt: 1 }} color={theme.typography.subtitle2.color}>
          {props.deleteTask?.title}
          </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={props.onClose}>
          {t('common:cancel')}
        </Button>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handleDeleteTask}
        >
          {t('common:delete')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskDeleteDialog;
