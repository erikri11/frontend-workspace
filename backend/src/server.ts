import app from './app';

import './services/tasksApi';
import './services/ordersApi';

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
