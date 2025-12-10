import './AppHeader.module.scss';
import { AppBar, IconButton, Toolbar, Typography, useColorScheme } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4 , Brightness7 } from '@mui/icons-material';

interface AppHeaderProps {
  onMenuClick: () => void;
}

export function AppHeader(props: AppHeaderProps) {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          color="inherit"
          edge="start"
          onClick={props.onMenuClick}
          sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuIcon />
        </IconButton>
        
        <Typography
          variant="h1"
          component="div"
          sx={{ flexGrow: 1 }}>
            Sogelink Norway
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
