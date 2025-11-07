import { render } from '@testing-library/react';

import BaseToolbar from './BaseToolbar';

describe('BaseToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
