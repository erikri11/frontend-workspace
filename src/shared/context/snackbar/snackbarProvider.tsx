import { ReactNode, useMemo, useState } from 'react';
import { SnackbarContext } from './SnackbarContext';
import { SnackbarMessage } from '@shared/types/snackbar';

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [snackbarMessage, setSnackbarMessage] = useState<SnackbarMessage | undefined>(undefined);

  const value = useMemo(
    () => ({ snackbarMessage, setSnackbarMessage }),
    [snackbarMessage]
  );

  return <SnackbarContext.Provider value={value}>{children}</SnackbarContext.Provider>;
}
