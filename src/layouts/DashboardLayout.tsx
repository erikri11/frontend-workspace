import { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import AppFooter from "@widgets/AppFooter/AppFooter";
import AppHeader from "@widgets/AppHeader/AppHeader";

interface DashboardLayoutProps {
  children?: ReactNode;
}

export function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <AppHeader />
      <Container maxWidth={false} disableGutters sx={{ flex: 1 }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Box component="main">
            {props.children}
          </Box>
        </Container>
      </Container>
      <AppFooter />
    </Box>
  );
}

export default DashboardLayout;
