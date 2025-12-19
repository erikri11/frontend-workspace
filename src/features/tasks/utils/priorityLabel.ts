import { Priority } from '@shared/types/task';
import { TFunction } from 'i18next';

export const getPriorityLabel = (t: TFunction, p: Priority) =>
  t(`tasks:tasksByPriority.${p.toLowerCase()}`);
