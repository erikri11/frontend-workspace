import { ValueFormatterParams } from 'ag-grid-community';
import { CurrencyEnum } from '@features/orders/models/currency';
import { IOrder } from '@features/orders/models/order';

// Cache formatters per currency to avoid creating Intl.NumberFormat per cell
const formatterCache: Partial<Record<CurrencyEnum, Intl.NumberFormat>> = {};

function getFormatter(currency: CurrencyEnum): Intl.NumberFormat {
  return (
    formatterCache[currency] ??
    (formatterCache[currency] = new Intl.NumberFormat('nb-NO', {
      style: 'currency',
      currencyDisplay: 'code',
      currency,
      minimumFractionDigits: 2,
    }))
  );
}

export function currencyValueFormatter(params: ValueFormatterParams<IOrder, number>): string {
  const value = params.value;
  if (value == null) return '';

  const currency = params.data?.currency ?? CurrencyEnum.NOK;
  return getFormatter(currency).format(value);
}
