import './SnackbarHost.module.scss';
import { useContext } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import { SnackbarContext } from '@shared/context/SnackbarContext';

export function SnackbarHost() {
  const { snackbarMessage, setSnackbarMessage } = useContext(SnackbarContext);

  return (
    <Snackbar
      open={!!snackbarMessage}
      autoHideDuration={snackbarMessage?.duration ?? 3000}
      onClose={() => setSnackbarMessage(undefined)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert 
        variant="filled"
        onClose={() => setSnackbarMessage(undefined)} 
        severity={(snackbarMessage?.type as AlertColor) ?? 'info'} 
        sx={{ minWidth: '250px' }}
       >
        {snackbarMessage?.content}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarHost;
