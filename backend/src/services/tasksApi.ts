import app from '../app';
import { v4 as uuidv4 } from 'uuid';
import { validateCreate, validateUpdate } from '../validators/tasksValidate';

let tasks = [
  { id: uuidv4(), title: 'Design wireframes',  dueDate: '2025-10-07', priority: 'High',   completed: false },
  { id: uuidv4(), title: 'Write API contract', dueDate: '2025-10-10', priority: 'Medium', completed: false },
  { id: uuidv4(), title: 'QA regression',      dueDate: '2025-10-15', priority: 'Low',    completed: true  },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const t = tasks.find(x => x.id === req.params.id);
  if (!t) return res.status(404).json({ error: 'Not found' });
  res.json(t);
});

app.post('/tasks', (req, res) => {
  const err = validateCreate(req.body);
  if (err) return res.status(400).json({ error: err });

  const { title, dueDate, priority, completed = false } = req.body;
  const task = { id: uuidv4(), title: title.trim(), dueDate, priority, completed: !!completed };
  tasks.unshift(task);
  res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
  const idx = tasks.findIndex(x => x.id === req.params.id);
  if (idx < 0) return res.status(404).json({ error: 'Not found' });

  const err = validateUpdate(req.body, false);
  if (err) return res.status(400).json({ error: err });

  const { title, dueDate, priority, completed } = req.body;
  tasks[idx] = { ...tasks[idx], title: title.trim(), dueDate, priority, completed };
  res.json(tasks[idx]);
});

app.delete('/tasks/:id', (req, res) => {
  const before = tasks.length;
  tasks = tasks.filter(x => x.id !== req.params.id);
  if (tasks.length === before) return res.status(404).json({ error: 'Not found' });
  res.status(204).send();
});
