interface ITask {
  title: string;
  dueDate: string;
  priority: string;
  completed?: boolean;
}

const PRIORITY_ORDER = ['Low', 'Medium', 'High'];
const isPriority = (p: string) => PRIORITY_ORDER.includes(p);
const isISODate = (s: string) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s);

export function validateCreate(body: ITask) {
  const { title, dueDate, priority, completed } = body ?? {};
  if (typeof title !== 'string' || !title.trim()) return 'title is required';
  if (!isISODate(dueDate)) return 'dueDate must be "yyyy-MM-dd"';
  if (!isPriority(priority)) return 'priority must be Low | Medium | High';
  if (completed != null && typeof completed !== 'boolean') return 'completed must be boolean';
  return null;
}

export function validateUpdate(body: ITask, partial = false) {
  if (!partial) return validateCreate(body);
  const { title, dueDate, priority, completed } = body ?? {};
  if ('title' in (body ?? {}) && (typeof title !== 'string' || !title.trim())) return 'title must be non-empty string';
  if ('dueDate' in (body ?? {}) && !isISODate(dueDate)) return 'dueDate must be "yyyy-MM-dd"';
  if ('priority' in (body ?? {}) && !isPriority(priority)) return 'priority must be Low | Medium | High';
  if ('completed' in (body ?? {}) && typeof completed !== 'boolean') return 'completed must be boolean';
  return null;
}
