import './DataGridTable.module.scss';
import { useEffect, useState } from 'react';
import { ColDef, GridApi } from 'ag-grid-community';
import BaseToolbar from '../BaseToolbar/BaseToolbar';
import BaseTable from '../BaseTable/BaseTable';

export interface DataGridTableProps<T> {
  data: T[];
  headers: ColDef<T>[];
  isAddTaskButtonVisible?: boolean;
  onAddTaskClick?: () => void;
}

export function DataGridTable<T>(props: DataGridTableProps<T>) {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [quickFilter, setQuickFilter] = useState<string>("");

  useEffect(() => {
    gridApi?.setGridOption('quickFilterText', (quickFilter ?? '').trim());
  }, [quickFilter, gridApi]);
  
  return (
    <>
      <BaseToolbar 
        quickFilter={quickFilter}
        setQuickFilter={setQuickFilter}
        isAddTaskButtonVisible={props.isAddTaskButtonVisible}
        onAddTaskClick={props.onAddTaskClick}
      />

      <BaseTable 
        gridApi={gridApi}
        setGridApi={setGridApi}
        data={props.data} 
        headers={props.headers}
      />
    </> 
  );
}

export default DataGridTable;
