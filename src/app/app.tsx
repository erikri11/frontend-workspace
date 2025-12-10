import './app.module.scss'
import { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box, Container, Toolbar } from "@mui/material";
import AppHeader from "@widgets/AppHeader/AppHeader";
import AppFooter from "@widgets/AppFooter/AppFooter";
import { MenuItem } from "@shared/types/menu";
import { DRAWER_WIDTH } from '@shared/constants/layout';
import TasksPage from "@pages/TasksPage/TasksPage";
import { PersistentDrawer } from '@layouts/PersistentDrawer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';

export function App() {
 const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(open => !open);
  };

  const menuItems: MenuItem[] = useMemo(() => [
      { text: "Dashboard", url: "/dashboard", icon: <DashboardIcon /> },
      { text: "Orders", url: "/orders", icon: <StoreIcon /> },
      { text: "Products", url: "/products", icon: <InventoryIcon /> },
      { text: "Customers", url: "/customers", icon: <GroupsIcon /> }
    ],[]
  );

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
            <Routes>
              <Route path='*' element={<Navigate to="dashboard" />} />
              <Route path="/dashboard" element={ <TasksPage />} />
              <Route path="/orders" element={<DashboardIcon />} />
              <Route path="/products" element={<DashboardIcon />} />
              <Route path="/customers" element={<DashboardIcon />} />
            </Routes>
          </Container>
        </Container>

        <AppFooter />
      </Box>
    </Box>
  );
}

export default App;
