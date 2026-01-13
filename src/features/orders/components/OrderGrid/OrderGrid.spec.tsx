import { render } from '@testing-library/react';

import OrderGrid from './OrderGrid';

describe('OrderGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderGrid />);
    expect(baseElement).toBeTruthy();
  });
});
