import './AppFooter.module.scss';
import { Box, Typography, useTheme } from '@mui/material';

export function AppFooter() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: isDark ? 'grey.900' : 'grey.200',
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Sogelink Norway
      </Typography>
    </Box>
  );
}

export default AppFooter;
