import { render } from '@testing-library/react';

import TaskCompletionChart from './TaskCompletionChart';

describe('TaskCompletionChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskCompletionChart />);
    expect(baseElement).toBeTruthy();
  });
});
