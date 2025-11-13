import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';

export const theme = createTheme({
  colorSchemes: {
    dark: true
  },
  typography: {
    ...typography
  },
  palette: {
    ...palette
  },
  breakpoints: {},
  zIndex: {},
  transitions: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: '140px'
        }
      }
    }
  }
});