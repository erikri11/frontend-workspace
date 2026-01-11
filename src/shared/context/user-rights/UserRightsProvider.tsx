import { ReactNode, useEffect, useMemo, useState, useCallback } from 'react';
import { RoleEnum } from '@shared/enums/role';
import { UserRightsContext } from './UserRightsContext';

const STORAGE_KEY = 'demo.role';
const initialRole = RoleEnum.USER;

export interface UserRightsProviderProps {
  children: ReactNode;
}

export function UserRightsProvider({ children }: UserRightsProviderProps) {
  const [role, setRoleState] = useState<RoleEnum>(initialRole);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && Object.values(RoleEnum).includes(stored as RoleEnum)) {
      setRoleState(stored as RoleEnum);
    }
  }, []);

  const setRole = useCallback((newRole: RoleEnum) => {
    setRoleState(newRole);
    localStorage.setItem(STORAGE_KEY, newRole);
  }, []);

  const value = useMemo(
    () => ({ role, setRole }), 
    [role, setRole]
  );

  return (
    <UserRightsContext.Provider value={value}>
      {children}
    </UserRightsContext.Provider>
  );
}
