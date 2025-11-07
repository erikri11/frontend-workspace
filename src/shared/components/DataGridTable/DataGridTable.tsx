import './DataGridTable.module.scss';
import { useEffect, useState } from 'react';
import { ColDef, GridApi } from 'ag-grid-community';
import { Box } from '@mui/material';
import BaseToolbar from '../BaseToolbar/BaseToolbar';
import BaseTable from '../BaseTable/BaseTable';

export interface DataGridTableProps<T> {
  data: T[];
  headers: ColDef<T>[];
}

export function DataGridTable<T>(props: DataGridTableProps<T>) {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [quickFilter, setQuickFilter] = useState<string>("");

   useEffect(() => {
    gridApi?.setGridOption('quickFilterText', (quickFilter ?? '').trim());
  }, [quickFilter, gridApi]);
  
  return (
    <Box>
      {/* Additional components for the DataGridTable can be added here */}

      <BaseToolbar 
        quickFilter={quickFilter}
        setQuickFilter={setQuickFilter}
      />

      <BaseTable 
        gridApi={gridApi}
        setGridApi={setGridApi}
        data={props.data} 
        headers={props.headers}
      />
    </Box>
  );
}

export default DataGridTable;
