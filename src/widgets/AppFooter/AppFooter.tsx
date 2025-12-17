import './AppFooter.module.scss';
import { Box, Typography } from '@mui/material';

export function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'customGrey.main',
        textAlign: "center",
        py: 2
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Sogelink Norway
      </Typography>
    </Box>
  );
}

export default AppFooter;
