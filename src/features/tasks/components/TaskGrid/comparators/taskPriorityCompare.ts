import { Priority, PRIORITY_RANK } from "@features/tasks/models/priority";

export const taskPriorityCompare = (a?: string, b?: string) =>
  (PRIORITY_RANK[a as Priority] ?? 999) -
  (PRIORITY_RANK[b as Priority] ?? 999);
