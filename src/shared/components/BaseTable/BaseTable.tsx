import { useMemo } from 'react';
import {ColDef, ModuleRegistry, AllCommunityModule, GridApi, GridReadyEvent} from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { LicenseManager, SetFilterModule } from 'ag-grid-enterprise';
import { Box } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import { baseTableTheme } from '@shared/theme/agGrid/baseTable';

ModuleRegistry.registerModules([AllCommunityModule, SetFilterModule]);
LicenseManager.setLicenseKey('LICENSE_KEY_HERE');

interface DashboardLayoutProps<T> {
  data: T[];
  headers: ColDef<T>[];
  gridApi: GridApi | null;
  setGridApi: (gridApi: GridApi | null) => void;
}

export default function BaseTable<T>(props: DashboardLayoutProps<T>) {
  const { mode, systemMode } = useColorScheme();
  const onGridReady = (params: GridReadyEvent) => props.setGridApi(params.api);

  // Always resolve to a valid mode (never undefined)
  const effectiveMode: 'light' | 'dark' = useMemo(() => {
    if (mode === 'dark') return 'dark';
    if (mode === 'light') return 'light';

    return systemMode === 'dark' ? 'dark' : 'light';
  },[mode, systemMode]);

  const agTheme = useMemo(() => baseTableTheme(effectiveMode), [effectiveMode]);

  const defaultColDef = useMemo<ColDef<T>>(() => ({
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
    }),[]
  );

  return (
    <Box style={{ width: '100%' }}>
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
        domLayout={'autoHeight'}
      />
    </Box>
  );
}
