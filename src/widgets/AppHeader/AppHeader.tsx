import './AppHeader.module.scss';
import { AppBar, IconButton, Toolbar, Typography, useColorScheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export function AppHeader() {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;
  
  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <Typography 
          variant="h1" 
          component="div" 
          sx={{ flexGrow: 1 }}
        >
          Element Logic
        </Typography>
        <IconButton
          color="inherit"
          onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
          sx={{ ml: 1 }}>
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
