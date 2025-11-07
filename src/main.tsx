import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';

import '@shared/styles/variables';
import '@shared/styles/global';

import App from './app/app';
import { theme } from '@shared/theme/mui/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>
);
