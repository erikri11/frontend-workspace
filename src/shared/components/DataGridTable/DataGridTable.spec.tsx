import { render } from '@testing-library/react';

import DataGridTable from './DataGridTable';

describe('DataGridTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataGridTable />);
    expect(baseElement).toBeTruthy();
  });
});
