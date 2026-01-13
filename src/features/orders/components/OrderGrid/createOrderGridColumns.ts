import { TFunction } from 'i18next';
import { ColDef } from 'ag-grid-community';
import { orderStatusRenderer } from './renderers/orderStatusRenderer';
import { orderStatusCompare } from './comparators/orderStatusCompare';
import { createdAtFormatter } from './formatters/createdAtFormatter';
import { IOrder } from '../../models/order';
import { ORDER_STATUSES } from '../../models/orderStatus';

interface ColumnArgsProps {
  t: TFunction;
}

export function createOrderGridColumns(props: ColumnArgsProps): ColDef<IOrder>[] {

  return [
    {
      field: 'orderNumber',
      headerName: props.t('common:title'),
      flex: 1,
      minWidth: 180,
      rowDrag: true
    },
    {
      field: 'customerName',
      headerName: props.t('orders:customerName'),
      minWidth: 140
    },
    {
      field: 'totalAmount',
      headerName: props.t('orders:totalAmount'),
      minWidth: 120
    },
    {
      field: 'status',
      headerName: props.t('orders:status'),
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
      headerName: props.t('orders:createdAt'),
      minWidth: 140,
      valueFormatter: createdAtFormatter
    }
  ];
}
