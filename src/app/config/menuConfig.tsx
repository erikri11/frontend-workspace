import { MenuItem } from "@shared/types/menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';

export const menuItems: MenuItem[] = [
  { textKey: "menu.dashboard", url: "/dashboard", icon: <DashboardIcon /> },
  { textKey: "menu.orders", url: "/orders", icon: <StoreIcon /> },
  { textKey: "menu.products", url: "/admin/products", icon: <InventoryIcon /> },
  { textKey: "menu.customers", url: "/admin/customers", icon: <GroupsIcon /> }
];
