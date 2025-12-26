export const COMPLETED_STORAGE_KEY = 'tasks.completedMap';

export const loadCompletedMap = (): Record<string, boolean> => {
  try {
    return JSON.parse(localStorage.getItem(COMPLETED_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
};

export const saveCompletedMap = (map: Record<string, boolean>) => {
  localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify(map));
};
