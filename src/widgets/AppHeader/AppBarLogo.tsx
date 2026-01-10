import { Box, IconButton } from '@mui/material';
import { useNavigateWithQuery } from './useNavigateWithQuery';
import logo from '@assets/github-logo.png';

export function AppBarLogo() {
  const navigateWithQuery = useNavigateWithQuery();

  return (
    <IconButton
      edge="start"
      onClick={() => navigateWithQuery('/dashboard')}
      aria-label="Go to dashboard"
      sx={{ mr: 1 }}
    >
      <Box
        component="img"
        src={logo}
        alt="DemoSoft logo"
        sx={{ width: 32, height: 32 }}
      />
    </IconButton>
  );
}
