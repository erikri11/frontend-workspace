import './app.module.scss'
import { useState } from 'react';
import { Box, Container, Toolbar } from "@mui/material";
import AppHeader from "@widgets/AppHeader/AppHeader";
import AppFooter from "@widgets/AppFooter/AppFooter";
import { DRAWER_WIDTH } from '@shared/constants/layout';
import { PersistentDrawer } from '@layouts/PersistentDrawer';
import { AppRoutes } from './routes/AppRoutes';
import { menuItems } from './config/menuConfig';

export function App() {
 const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(open => !open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppHeader onMenuClick={handleDrawerToggle} />

      <PersistentDrawer
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle}
        menuItems={menuItems}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` }
        }}
      >

        {/* Push content below AppBar */}
        <Toolbar />

        <Container maxWidth={false} disableGutters sx={{ flex: 1 }}>
          <Container maxWidth="xl" sx={{ py: 4 }}>
            <AppRoutes />
          </Container>
        </Container>

        <AppFooter />
      </Box>
    </Box>
  );
}

export default App;
