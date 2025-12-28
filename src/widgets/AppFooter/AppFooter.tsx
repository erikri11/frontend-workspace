import './AppFooter.module.scss';
import { Box, Typography } from '@mui/material';

export function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: (theme) =>
          theme.vars?.palette.customGrey?.main,
        color: (theme) =>
          theme.vars?.palette.customGrey?.contrastText
      }}
    >
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} DemoSoft
      </Typography>
    </Box>
  );
}

export default AppFooter;
