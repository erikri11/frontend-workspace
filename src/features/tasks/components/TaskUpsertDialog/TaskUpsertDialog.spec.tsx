import { render } from '@testing-library/react';

import TaskUpsertDialog from './TaskUpsertDialog';

describe('TaskUpsertDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskUpsertDialog />);
    expect(baseElement).toBeTruthy();
  });
});
