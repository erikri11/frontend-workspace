import { useState } from "react";
import { RoleEnum } from "@shared/enums/role";
import { UserRightsContext } from "./userRightsContext";

const initialRole = RoleEnum.USER;

export interface UserRightsProviderProps {
  children: React.ReactNode;
}

export function UserRightsProvider(props: UserRightsProviderProps) {
  const [role, setRole] = useState<RoleEnum>(initialRole);

  return (
    <UserRightsContext value={{ role, setRole }}>
      {props.children}
    </UserRightsContext>
  );
}
