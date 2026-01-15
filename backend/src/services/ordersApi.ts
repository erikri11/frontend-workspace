import app from '../app';
import { v4 as uuidv4 } from 'uuid';
import { IOrder } from '../models/order';
import { CurrencyEnum } from '../models/currency';

let orders: IOrder[] = [
  { id: uuidv4(), orderNumber: 'SO-45821', customerName: 'Nordic Solutions AS',          totalAmount: 12500, status: 'Pending',   createdAt: '2024-06-10', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45822', customerName: 'FjordTech Consulting',         totalAmount: 24900, status: 'Completed', createdAt: '2024-06-12', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45823', customerName: 'Arctic Digital Group',         totalAmount: 49900, status: 'Cancelled', createdAt: '2024-06-15', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45824', customerName: 'Polar Systems AS',             totalAmount: 18900, status: 'Pending',   createdAt: '2024-06-18', currency: CurrencyEnum.SEK },
  { id: uuidv4(), orderNumber: 'SO-45825', customerName: 'Aurora IT Services',           totalAmount: 32500, status: 'Completed', createdAt: '2024-06-23', currency: CurrencyEnum.SEK },
  { id: uuidv4(), orderNumber: 'SO-45826', customerName: 'NorthPeak Analytics',           totalAmount: 780,   status: 'Pending',   createdAt: '2024-06-25', currency: CurrencyEnum.EUR },
  { id: uuidv4(), orderNumber: 'SO-45827', customerName: 'BlueWave Software',             totalAmount: 4120,  status: 'Completed', createdAt: '2024-06-12', currency: CurrencyEnum.EUR },
  { id: uuidv4(), orderNumber: 'SO-45828', customerName: 'Iceberg Innovations',           totalAmount: 9600,  status: 'Pending',   createdAt: '2024-06-13', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45829', customerName: 'Summit Data AS',                totalAmount: 15400, status: 'Pending',   createdAt: '2024-06-13', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45830', customerName: 'CloudNorth Solutions',          totalAmount: 28900, status: 'Completed', createdAt: '2024-06-14', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45831', customerName: 'Aurora Business Systems',       totalAmount: 6700,  status: 'Cancelled', createdAt: '2024-06-14', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45832', customerName: 'Frostbyte Technologies',        totalAmount: 19800, status: 'Pending',   createdAt: '2024-06-15', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45833', customerName: 'Northern Lights Consulting',    totalAmount: 35200, status: 'Completed', createdAt: '2024-06-15', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45834', customerName: 'Glacier Point Systems',         totalAmount: 800,   status: 'Pending',   createdAt: '2024-06-16', currency: CurrencyEnum.USD },
  { id: uuidv4(), orderNumber: 'SO-45835', customerName: 'Arctic Flow AS',                totalAmount: 22100, status: 'Pending',   createdAt: '2024-06-16', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45836', customerName: 'Viking Cloud Services',         totalAmount: 18450, status: 'Completed', createdAt: '2024-06-17', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45837', customerName: 'Nordic Insight Labs',           totalAmount: 12900, status: 'Pending',   createdAt: '2024-06-18', currency: CurrencyEnum.EUR },
  { id: uuidv4(), orderNumber: 'SO-45838', customerName: 'Baltic Edge Solutions',         totalAmount: 45700, status: 'Completed', createdAt: '2024-06-19', currency: CurrencyEnum.SEK },
  { id: uuidv4(), orderNumber: 'SO-45839', customerName: 'Snowfall Digital',              totalAmount: 6200,  status: 'Cancelled', createdAt: '2024-06-19', currency: CurrencyEnum.USD },
  { id: uuidv4(), orderNumber: 'SO-45840', customerName: 'Fjordline Systems',             totalAmount: 9800,  status: 'Pending',   createdAt: '2024-06-20', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45841', customerName: 'Arctic Code Works',             totalAmount: 21500, status: 'Completed', createdAt: '2024-06-21', currency: CurrencyEnum.EUR },
  { id: uuidv4(), orderNumber: 'SO-45842', customerName: 'Polar Data Networks',           totalAmount: 30500, status: 'Pending',   createdAt: '2024-06-22', currency: CurrencyEnum.SEK },
  { id: uuidv4(), orderNumber: 'SO-45843', customerName: 'NorthStar AI Solutions',        totalAmount: 14900, status: 'Completed', createdAt: '2024-06-22', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45844', customerName: 'Aurora Cloud Platform',         totalAmount: 5200,  status: 'Pending',   createdAt: '2024-06-23', currency: CurrencyEnum.USD },
  { id: uuidv4(), orderNumber: 'SO-45845', customerName: 'IceFlow Analytics',             totalAmount: 27300, status: 'Completed', createdAt: '2024-06-24', currency: CurrencyEnum.EUR },
  { id: uuidv4(), orderNumber: 'SO-45846', customerName: 'Northern Ridge Software',       totalAmount: 9100,  status: 'Pending',   createdAt: '2024-06-25', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45847', customerName: 'BlueFrost Technologies',        totalAmount: 39800, status: 'Completed', createdAt: '2024-06-26', currency: CurrencyEnum.SEK },
  { id: uuidv4(), orderNumber: 'SO-45848', customerName: 'Glacier Peak Digital',          totalAmount: 6700,  status: 'Cancelled', createdAt: '2024-06-26', currency: CurrencyEnum.NOK },
  { id: uuidv4(), orderNumber: 'SO-45849', customerName: 'Arctic Horizon Systems',        totalAmount: 24800, status: 'Pending',   createdAt: '2024-06-27', currency: CurrencyEnum.EUR },
  { id: uuidv4(), orderNumber: 'SO-45850', customerName: 'Snowline Enterprise Solutions', totalAmount: 41200, status: 'Completed', createdAt: '2024-06-28', currency: CurrencyEnum.USD }
];

app.get('/orders', (_req, res) => {
  res.json(orders);
});

app.get('/orders/:id', (req, res) => {
  const t = orders.find(x => x.id === req.params.id);
  if (!t) return res.status(404).json({ error: 'Not found' });
  res.json(t);
});

app.post('/orders', (req, res) => {
  const { orderNumber, customerName, totalAmount, status, createdAt, currency } = req.body;
  const order: IOrder = { id: uuidv4(), orderNumber, customerName, totalAmount, status, createdAt, currency: currency ?? CurrencyEnum.NOK };
  orders.unshift(order);
  res.status(201).json(order);
});

app.put('/orders/:id', (req, res) => {
  const idx = orders.findIndex(x => x.id === req.params.id);
  if (idx < 0) return res.status(404).json({ error: 'Not found' });

  const { orderNumber, customerName, totalAmount, status, createdAt, currency } = req.body;
  orders[idx] = { ...orders[idx], orderNumber, customerName, totalAmount, status, createdAt, currency: currency ?? CurrencyEnum.NOK };
  res.json(orders[idx]);
});

app.delete('/orders/:id', (req, res) => {
  const before = orders.length;
  orders = orders.filter(x => x.id !== req.params.id);
  if (orders.length === before) return res.status(404).json({ error: 'Not found' });
  res.status(204).send();
});
