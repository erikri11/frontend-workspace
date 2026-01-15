import { Routes, Route, Navigate } from "react-router-dom";
import { RoleEnum } from "@shared/enums/role";
import { lazy, Suspense } from "react";
import { CreateRoute } from "@shared/utils/access";
import { CenteredSpinner } from "@layouts/CenteredSpinner";
import { useUserRights } from "@shared/context/user-rights/useUserRights";

const TasksPage = lazy(() => import("@pages/TasksPage/TasksPage"));
const Orders = lazy(() => import("@pages/Orders/Orders"));
const Products = lazy(() => import("@pages/Products/Products"));
const Customers = lazy(() => import("@pages/Customers/Customers"));

export function AppRoutes() {
  const { role } = useUserRights();

  return (
    <Suspense fallback={<CenteredSpinner />} >
      <Routes>
        <Route path='*' element={<Navigate to="/dashboard" replace />} />
        {CreateRoute("/dashboard", <TasksPage />, [role], RoleEnum.USER)}
        {CreateRoute("/admin/orders", <Orders />, [role], RoleEnum.ADMIN)}
        {CreateRoute("/admin/products", <Products/>, [role], RoleEnum.ADMIN)}
        {CreateRoute("/admin/customers", <Customers />, [role], RoleEnum.ADMIN)}
      </Routes>
    </Suspense>
  );
}
