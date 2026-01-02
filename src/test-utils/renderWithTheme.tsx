import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={createTheme()}>
      {ui}
    </ThemeProvider>
  );
}
