import app from '../app';
import { v4 as uuidv4 } from 'uuid';
import { validateCreate, validateUpdate } from '../validators/tasksValidate';

let orders = [
  { id: uuidv4(), orderNumber: 'SO-45821', customerName: 'Nordic Solutions AS',  totalAmount: 12500, status: 'Pending', createdAt: '2024-06-10' },
  { id: uuidv4(), orderNumber: 'SO-45822', customerName: 'FjordTech Consulting', totalAmount: 24900, status: 'Completed', createdAt: '2024-06-10' },
  { id: uuidv4(), orderNumber: 'SO-45823', customerName: 'Arctic Digital Group', totalAmount: 49900, status: 'Cancelled', createdAt: '2024-06-10' }
];

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.get('/orders/:id', (req, res) => {
  const t = orders.find(x => x.id === req.params.id);
  if (!t) return res.status(404).json({ error: 'Not found' });
  res.json(t);
});

app.post('/orders', (req, res) => {
  const err = validateCreate(req.body);
  if (err) return res.status(400).json({ error: err });

  const { orderNumber, customerName, totalAmount, status, createdAt } = req.body;
  const order = { id: uuidv4(), orderNumber, customerName, totalAmount, status, createdAt };
  orders.unshift(order);
  res.status(201).json(order);
});

app.put('/orders/:id', (req, res) => {
  const idx = orders.findIndex(x => x.id === req.params.id);
  if (idx < 0) return res.status(404).json({ error: 'Not found' });

  const err = validateUpdate(req.body, false);
  if (err) return res.status(400).json({ error: err });

  const { orderNumber, customerName, totalAmount, status, createdAt } = req.body;
  orders[idx] = { ...orders[idx], orderNumber, customerName, totalAmount, status, createdAt };
  res.json(orders[idx]);
});

app.delete('/orders/:id', (req, res) => {
  const before = orders.length;
  orders = orders.filter(x => x.id !== req.params.id);
  if (orders.length === before) return res.status(404).json({ error: 'Not found' });
  res.status(204).send();
});
