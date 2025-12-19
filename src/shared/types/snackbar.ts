import { ReactNode } from "react";
import { AlertColor } from '@mui/material';

export interface SnackbarMessage {
  content: ReactNode,
  type: AlertColor,
  duration?: number,
  userId?: string
}
