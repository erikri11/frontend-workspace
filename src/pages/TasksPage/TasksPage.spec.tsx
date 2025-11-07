import { render } from '@testing-library/react';

import TasksPage from './TasksPage';

describe('TasksPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TasksPage />);
    expect(baseElement).toBeTruthy();
  });
});
