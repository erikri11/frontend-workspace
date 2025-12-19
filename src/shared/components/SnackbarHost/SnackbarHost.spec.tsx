import { render } from '@testing-library/react';

import SnackbarHost from './SnackbarHost';

describe('SnackbarHost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SnackbarHost />);
    expect(baseElement).toBeTruthy();
  });
});
