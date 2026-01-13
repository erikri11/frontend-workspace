import { makeRequest } from '@shared/services/makeRequest';
import { IOrder } from '../models/order';

type QueryParams = Record<string, string | number | boolean>;

function toQuery(params?: QueryParams) {
  if (!params) return '';
  const qs = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  ).toString();

  return qs ? `?${qs}` : '';
}

export const OrdersApi = {
  get: (params?: QueryParams) => {
    return makeRequest<IOrder[]>(`/orders${toQuery(params)}`);
  },

  post: (order: IOrder) => {
    return makeRequest<IOrder>('/orders', {
      method: 'POST',
      body: JSON.stringify(order),
    });
  },

  put: (id: string, payload: Partial<IOrder>) => {
    return makeRequest<IOrder>(`/orders/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },

  delete: (id: string) => {
    return makeRequest<void>(`/orders/${id}`, {
      method: 'DELETE',
    });
  },
};
