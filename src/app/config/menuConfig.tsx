import { MenuItem } from "@shared/types/menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';

export const menuItems: MenuItem[] = [
  { text: "Dashboard", url: "/dashboard", icon: <DashboardIcon /> },
  { text: "Orders", url: "/orders", icon: <StoreIcon /> },
  { text: "Products", url: "/admin/products", icon: <InventoryIcon /> },
  { text: "Customers", url: "/admin/customers", icon: <GroupsIcon /> }
];
