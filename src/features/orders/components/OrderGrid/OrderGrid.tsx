import './OrderGrid.module.scss';
import { useTranslation } from 'react-i18next';
import DataGridTable from '@shared/components/DataGridTable/DataGridTable';
import { createOrderGridColumns } from './createOrderGridColumns';
import { useOrders } from '../../hooks/useOrders';
import { OrderGridSkeleton } from './OrderGridSkeleton';

export function OrderGrid() {
  const { t } = useTranslation(['common', 'orders']);
  const { orders, loading } = useOrders();
  
  const headers = createOrderGridColumns({ t });

  return (
      loading ? <OrderGridSkeleton /> : 
      <DataGridTable
        data={orders}
        headers={headers}
      />
  );
}

export default OrderGrid;
