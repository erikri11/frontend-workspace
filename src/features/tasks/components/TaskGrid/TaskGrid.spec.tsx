import { render } from '@testing-library/react';

import TaskGrid from './TaskGrid';

describe('TaskGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskGrid />);
    expect(baseElement).toBeTruthy();
  });
});
