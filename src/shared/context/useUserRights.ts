import { useContext } from 'react';
import { UserRightsContext } from '@shared/context/userRightsContext';
import { RoleEnum } from '@shared/enums/role';

export function useUserRights() {
  const ctx = useContext(UserRightsContext);
  const role = ctx.role ?? RoleEnum.USER;

  return { role, setRole: ctx.setRole };
}
