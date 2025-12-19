import { ReactNode, useState } from "react";
import { RoleEnum } from "@shared/enums/role";
import { UserRightsContext } from "./userRightsContext";

const initialRole = RoleEnum.USER;

export interface UserRightsProviderProps {
  children: ReactNode;
}

export function UserRightsProvider(props: UserRightsProviderProps) {
  const [role, setRole] = useState<RoleEnum>(initialRole);

  return (
    <UserRightsContext.Provider value={{ role, setRole }}>
      {props.children}
    </UserRightsContext.Provider>
  );
}
