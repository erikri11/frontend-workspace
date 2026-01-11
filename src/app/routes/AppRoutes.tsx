import { Routes, Route, Navigate } from "react-router-dom";
import { RoleEnum } from "@shared/enums/role";
import { lazy, Suspense, useContext } from "react";
import { UserRightsContext } from "@shared/context/UserRightsContext";
import { CreateRoute } from "@shared/utils/access";
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';
import { CenteredSpinner } from "@layouts/CenteredSpinner";

const TasksPage = lazy(() => import("@pages/TasksPage/TasksPage"));
  
export function AppRoutes() {
  const { role: userRole } = useContext(UserRightsContext);
  
  if (!userRole) {
    return null;
  }
  
  return (
    <Suspense fallback={<CenteredSpinner />} >
      <Routes>
        <Route path='*' element={<Navigate to="/dashboard" replace />} />
        {CreateRoute("/dashboard", <TasksPage />, [userRole])}
        {CreateRoute("/admin/orders", <StoreIcon />, [userRole], RoleEnum.ADMIN)}
        {CreateRoute("/admin/products", <InventoryIcon />, [userRole], RoleEnum.ADMIN)}
        {CreateRoute("/admin/customers", <GroupsIcon />, [userRole], RoleEnum.ADMIN)}
      </Routes>
    </Suspense>
  );
}
