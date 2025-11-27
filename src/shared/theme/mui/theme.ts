import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { MuiButton } from './components/MuiButton';
import { darkPalette, lightPalette } from './palette';

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        ...lightPalette,
      },
    },
    dark: {
      palette: {
        ...darkPalette,
      },
    },
  },
  typography: {
    ...typography
  },
  palette: {
    ...lightPalette
  },
  breakpoints: {},
  zIndex: {},
  transitions: {},
  components: {
    ...MuiButton
  } 
});
