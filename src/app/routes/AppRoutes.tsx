import { Routes, Route, Navigate } from "react-router-dom";
import { RoleEnum } from "@shared/enums/role";
import { lazy, Suspense, useContext } from "react";
import { UserRightsContext } from "@shared/context/userRightsContext";
import { CreateRoute } from "@shared/utils/access";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { CenteredSpinner } from "@layouts/CenteredSpinner";

const TasksPage = lazy(() => import("@pages/TasksPage/TasksPage"));
  
export function AppRoutes() {
  const { role: userRole } = useContext(UserRightsContext);
  // console.log("User role in AppRoutes:", userRole);
  
  if (!userRole) {
    return null;
  }
  
  return (
    <Suspense fallback={<CenteredSpinner />} >
      <Routes>
        <Route path='*' element={<Navigate to="/dashboard" replace />} />
        {CreateRoute("/dashboard", <TasksPage />, [userRole])}
        {CreateRoute("/orders", <DashboardIcon />, [userRole], RoleEnum.ADMIN)}
        {CreateRoute("/admin/products", <DashboardIcon />, [userRole], RoleEnum.ADMIN)}
        {CreateRoute("/admin/customers", <DashboardIcon />, [userRole], RoleEnum.ADMIN)}
      </Routes>
    </Suspense>
  );
}
