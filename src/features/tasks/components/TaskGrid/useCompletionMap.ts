import { useState } from 'react';
import { loadCompletedMap, saveCompletedMap } from '@features/tasks/utils/completedStorage';

export function useCompletedMap() {
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>(() => loadCompletedMap());

  const toggleCompleted = (id: string, next: boolean) => {
    setCompletedMap(prev => {
      const updated = { ...prev, [id]: next };
      saveCompletedMap(updated);
      return updated;
    });
  };

  return { completedMap, toggleCompleted };
}
