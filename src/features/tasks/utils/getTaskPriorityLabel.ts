import { TFunction } from 'i18next';
import { Priority } from '../models/priority';

export const getTaskPriorityLabel = (t: TFunction, p: Priority) =>
  t(`tasks:tasksByPriority.${p.toLowerCase()}`);
