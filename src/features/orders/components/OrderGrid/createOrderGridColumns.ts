import { TFunction } from 'i18next';
import { ColDef } from 'ag-grid-community';
import { orderStatusRenderer } from './renderers/orderStatusRenderer';
import { orderStatusCompare } from './comparators/orderStatusCompare';
import { createdAtFormatter } from './formatters/createdAtFormatter';
import { currencyValueFormatter } from './formatters/currencyValueFormatter';
import { IOrder } from '../../models/order';
import { ORDER_STATUSES } from '../../models/orderStatus';

interface ColumnArgsProps {
  t: TFunction;
}

export function createOrderGridColumns(props: ColumnArgsProps): ColDef<IOrder>[] {
  const { t } = props;

  return [
    {
      field: 'id',
      headerName: t('common:id'),
      minWidth: 180
    },
    {
      field: 'orderNumber',
      headerName: t('common:title'),
      minWidth: 180
    },
    {
      field: 'customerName',
      headerName: t('orders:customerName'),
      minWidth: 140,
      flex: 1
    },
    {
      field: 'totalAmount',
      headerName: t('orders:totalAmount'),
      minWidth: 120,
      valueFormatter: currencyValueFormatter
    },
    {
      field: 'status',
      headerName: t('orders:status'),
      minWidth: 140,
      cellRenderer: orderStatusRenderer,
      filter: 'agSetColumnFilter',
      comparator: orderStatusCompare,
      filterParams: {
        values: ORDER_STATUSES,
        comparator: orderStatusCompare
      }
    },
    {
      field: 'createdAt',
      headerName: t('orders:createdAt'),
      minWidth: 140,
      valueFormatter: createdAtFormatter
    }
  ];
}
