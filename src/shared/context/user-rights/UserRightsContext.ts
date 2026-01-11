import { createContext } from "react";
import { RoleEnum } from "@shared/enums/role";

export interface UserRightsContextProps {
  role: RoleEnum;
  setRole: (role: RoleEnum) => void;
}

export const UserRightsContext = createContext<UserRightsContextProps | null>(null);
