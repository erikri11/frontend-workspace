import './AppHeader.module.scss';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7, BrightnessAuto } from '@mui/icons-material';

interface AppHeaderProps {
  onMenuClick: () => void;
}

export function AppHeader(props: AppHeaderProps) {
  const { mode, systemMode, setMode } = useColorScheme();
  if (!mode) return null;

  // Resolve what the user actually sees
  const effectiveMode =
    mode === 'system' ? systemMode : mode;

  const handleToggle = () => {
    if (mode === 'system') {
      setMode('dark');
    } else if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('system');
    }
  };

  const renderIcon = () => {
    if (mode === 'system') return <BrightnessAuto />;
    return effectiveMode === 'dark'
      ? <Brightness7 />
      : <Brightness4 />;
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          color="inherit"
          edge="start"
          onClick={props.onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          Sogelink Norway
        </Typography>

        <IconButton
          color="inherit"
          onClick={handleToggle}
          sx={{ ml: 1 }}
          aria-label="Toggle color scheme"
        >
          {renderIcon()}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
