import { render } from '@testing-library/react';

import UnauthorizedPage from './UnauthorizedPage';

describe('UnauthorizedPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UnauthorizedPage />);
    expect(baseElement).toBeTruthy();
  });
});
