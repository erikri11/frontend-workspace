import { JSX} from "react";
import { Route } from "react-router-dom";
import { RoleEnum } from "@shared/enums/role";
import UnauthorizedPage from "@pages/UnauthorizedPage/UnauthorizedPage";

export const CreateRoute = (path: string, component: JSX.Element, userRoles: RoleEnum[], requiredRole: RoleEnum = RoleEnum.USER) => {
  return (
    <Route path={path} element={checkAccess(component, userRoles, requiredRole)} />
  )
}

export const checkAccess = (component: JSX.Element, userRoles: RoleEnum[], requiredRole: RoleEnum) => {
  const { hasAccess } = checkUserAccess(userRoles, requiredRole);
  return hasAccess ? component : <UnauthorizedPage />;
}

export function checkUserAccess(userRoles: RoleEnum[], requiredAccess: RoleEnum = RoleEnum.USER) {
  let hasAccess = false;
  if (userRoles.includes(RoleEnum.ADMIN)) return { hasAccess: true, noAccessMessage: "" };
  else if (requiredAccess === RoleEnum.ADMIN) hasAccess = userRoles.includes(RoleEnum.ADMIN);
  else if (requiredAccess === RoleEnum.USER) hasAccess = true;
  else hasAccess = true;

  const noAccessMessage = hasAccess ? "" : `Rettighetsnivået ditt er ${userRoles} og må være ${requiredAccess} for tilgang`;
  return { hasAccess, noAccessMessage };
}

export const checkMenuAccess = (component: JSX.Element, userRoles: RoleEnum[], requiredRole?: RoleEnum) => {
  const { hasAccess } = checkUserAccess(userRoles, requiredRole);
  if (!requiredRole) return component;
  return hasAccess ? component : null;
}
