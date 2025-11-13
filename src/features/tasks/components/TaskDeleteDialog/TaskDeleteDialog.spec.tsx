import { render } from '@testing-library/react';

import TaskDeleteDialog from './TaskDeleteDialog';

describe('TaskDeleteDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskDeleteDialog />);
    expect(baseElement).toBeTruthy();
  });
});
