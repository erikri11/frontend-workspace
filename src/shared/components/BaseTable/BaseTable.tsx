import { useMemo } from 'react';
import { ColDef, ModuleRegistry, AllCommunityModule, GridApi, GridReadyEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { LicenseManager, SetFilterModule } from 'ag-grid-enterprise';
import { Box, useColorScheme } from '@mui/material';
import { baseTableTheme } from '@shared/theme/agGrid/baseTable';

ModuleRegistry.registerModules([AllCommunityModule, SetFilterModule]);
LicenseManager.setLicenseKey("LICENSE_KEY_HERE");

interface DashboardLayoutProps<T> {
  data: T[];
  headers: ColDef<T>[];
  gridApi: GridApi | null;
  setGridApi: (gridApi: GridApi | null) => void;
}

export default function BaseTable<T>(props: DashboardLayoutProps<T>) {
  const onGridReady = (params: GridReadyEvent) => props.setGridApi(params.api);
  const { mode } = useColorScheme();

  const agTheme = useMemo(() => (
    baseTableTheme(mode === 'dark' ? 'dark' : 'light')
  ), [mode]);

  const defaultColDef = useMemo<ColDef<T>>(() => ({ 
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
  }), []);

  return (
    <Box style={{ height: 300, width: '100%' }}>
      <AgGridReact<T>
        theme={agTheme}
        columnDefs={props.headers}
        rowData={props.data}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowHeight={50}
        headerHeight={48}
        rowDragManaged={true}
        onGridReady={onGridReady}
      />
    </Box>
  );
}
