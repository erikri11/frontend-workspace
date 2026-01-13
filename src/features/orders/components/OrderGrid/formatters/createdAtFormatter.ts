import { ValueFormatterParams } from "ag-grid-community";
import { formatDate } from "@shared/utils/formatDate";
import { IOrder } from "@features/orders/models/order";

export const createdAtFormatter = (params: ValueFormatterParams<IOrder>) =>
    formatDate(params.value, true);
