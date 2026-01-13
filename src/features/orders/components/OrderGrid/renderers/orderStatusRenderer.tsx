import { t } from "i18next";
import { ICellRendererParams } from "ag-grid-community";
import { Chip } from "@mui/material";

import { IOrder } from "@features/orders/models/order";
import { ORDER_STATUS_COLOR, OrderStatus } from "@features/orders/models/orderStatus";
import { getOrderStatusLabel } from "@features/orders/utils/getOrderStatusLabel";

export const orderStatusRenderer = (params: ICellRendererParams<IOrder, OrderStatus>) => {
  const pv = params.value;
  if (!pv) return null;

  return (
    <Chip
      label={getOrderStatusLabel(t, pv)}
      size="small"
      variant="outlined"
      color={ORDER_STATUS_COLOR[pv]}
    />
  );
};
