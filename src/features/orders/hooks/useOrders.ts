import { useEffect, useState } from 'react';
import { OrdersApi } from '@features/orders/services/ordersApi';
import { IOrder } from '@features/orders/models/order';

export function useOrders() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadOrders = async () => {
      setLoading(true);
      try {
        const apiOrders = await OrdersApi.get();
        setOrders(apiOrders);
      } catch (err) {
        console.error('Failed to load orders', err);
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
  }, []);

  return { orders, loading };
}
