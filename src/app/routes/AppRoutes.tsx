import { Routes, Route, Navigate } from "react-router-dom";
import { RoleEnum } from "@shared/enums/role";
import TasksPage from "@pages/TasksPage/TasksPage";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useContext } from "react";
import { UserRightsContext } from "@shared/context/userRightsContext";
import { CreateRoute } from "@shared/utils/access";

export function AppRoutes() {
  const { role: userRole } = useContext(UserRightsContext);
  // console.log("User role in AppRoutes:", userRole);
  
  if (!userRole) {
    return null;
  }
  
  return (
    <Routes>
      <Route path='*' element={<Navigate to="/dashboard" replace />} />
      {CreateRoute("/dashboard", <TasksPage />, [userRole])}
      {CreateRoute("/orders", <DashboardIcon />, [userRole])}
      {CreateRoute("/admin/products", <DashboardIcon />, [userRole], RoleEnum.ADMIN)}
      {CreateRoute("/admin/customers", <DashboardIcon />, [userRole], RoleEnum.ADMIN)}
    </Routes>
  );
}
