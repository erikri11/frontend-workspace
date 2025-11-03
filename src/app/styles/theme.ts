import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  colorSchemes: {
    dark: true
  },
  typography: {
    h1: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 'var(--font-weight-normal)',
      fontSize: 'calc(var(--font-size-base) * 2)'
    },
    h2: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 'var(--font-weight-normal)',
      fontSize: 'calc(var(--font-size-base) * 1.5)'
    },
    h3: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 'var(--font-weight-normal)',
      fontSize: 'calc(var(--font-size-base) * 1.25)'
    },
    h4: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 'var(--font-weight-normal)',
      fontSize: 'calc(var(--font-size-base) * 1.125)'
    },
    h5: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 'var(--font-weight-normal)',
      fontSize: 'calc(var(--font-size-base) * 1)'
    },
    h6: {
      fontFamily: 'var(--font-family-base)',
      fontWeight: 'var(--font-weight-normal)',
      fontSize: 'calc(var(--font-size-base) * 0.875)'
    },
    subtitle1: {
      fontFamily: 'var(--font-family-base-variant)',
      fontWeight: 'var(--font-weight-bold)',
      fontSize: 'calc(var(--font-size-base) * 1)'
    },
    subtitle2: {
      fontFamily: 'var(--font-family-base-variant)',
      fontWeight: 'var(--font-weight-medium)',
      fontSize: 'calc(var(--font-size-base) * 0.875)'
    },
    body1: {
      fontFamily: 'var(--font-family-base-variant)',
      fontWeight: 'var(--font-weight-normal)',
      fontSize: 'calc(var(--font-size-base) * 1)',
      color: 'var(--mui-color-grey-700)',
    },
    body2: {
      fontFamily: 'var(--font-family-base-variant)',
      fontWeight: 'var(--font-weight-medium)',
      fontSize: 'calc(var(--font-size-base) * 0.875)'
    },
    button: {},
    caption: {},
    overline: {} 
  },
  palette: {
    primary: {
      main: 'var(--mui-color-primary-main)',
      light: 'var(--mui-color-primary-light)',
      dark: 'var(--mui-color-primary-dark)',
      contrastText: 'var(--mui-color-primary-contrastText)',
    },
    secondary: {
      main: 'var(--mui-color-secondary-main)',
      light: 'var(--mui-color-secondary-light)',
      dark: 'var(--mui-color-secondary-dark)',
      contrastText: 'var(--mui-color-secondary-contrastText)',
    },
    error: {
      main: 'var(--mui-color-error-main)',
      light: 'var(--mui-color-error-light)',
      dark: 'var(--mui-color-error-dark)',
      contrastText: 'var(--mui-color-error-contrastText)',
    },
    warning: {
      main: 'var(--mui-color-warning-main)',
      light: 'var(--mui-color-warning-light)',
      dark: 'var(--mui-color-warning-dark)',
      contrastText: 'var(--mui-color-warning-contrastText)',
    },
    info: {
      main: 'var(--mui-color-info-main)',
      light: 'var(--mui-color-info-light)',
      dark: 'var(--mui-color-info-dark)',
      contrastText: 'var(--mui-color-info-contrastText)',
    },
    success: {
      main: 'var(--mui-color-success-main)',
      light: 'var(--mui-color-success-light)',
      dark: 'var(--mui-color-success-dark)',
      contrastText: 'var(--mui-color-success-contrastText)',
    }
  },
  breakpoints: {},
  zIndex: {},
  transitions: {},
  components: {}
});
