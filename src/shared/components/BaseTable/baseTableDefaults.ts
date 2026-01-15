import { ColDef } from 'ag-grid-community';

export const defaultColDefBase: ColDef = {
  sortable: true,
  filter: true,
  resizable: true
};

export const paginationPageSizeSelectorBase = [5, 10, 20, 50, 100] as const;
