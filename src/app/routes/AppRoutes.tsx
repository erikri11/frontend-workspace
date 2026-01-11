import { Routes, Route, Navigate } from "react-router-dom";
import { RoleEnum } from "@shared/enums/role";
import { lazy, Suspense } from "react";
import { CreateRoute } from "@shared/utils/access";
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';
import { CenteredSpinner } from "@layouts/CenteredSpinner";
import { useUserRights } from "@shared/context/user-rights/useUserRights";

const TasksPage = lazy(() => import("@pages/TasksPage/TasksPage"));
  
export function AppRoutes() {
  const { role } = useUserRights();

  return (
    <Suspense fallback={<CenteredSpinner />} >
      <Routes>
        <Route path='*' element={<Navigate to="/dashboard" replace />} />
        {CreateRoute("/dashboard", <TasksPage />, [role], RoleEnum.USER)}
        {CreateRoute("/admin/orders", <StoreIcon />, [role], RoleEnum.ADMIN)}
        {CreateRoute("/admin/products", <InventoryIcon />, [role], RoleEnum.ADMIN)}
        {CreateRoute("/admin/customers", <GroupsIcon />, [role], RoleEnum.ADMIN)}
      </Routes>
    </Suspense>
  );
}
