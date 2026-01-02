import { screen } from '@testing-library/react';
import TaskCompletionChart from './TaskCompletionChart';
import { renderWithTheme } from '@test-utils/renderWithTheme';
import { createMockTasks } from '@test-utils/tasks/mockTaskCompletionChart';
import { TFunction } from 'i18next';

jest.mock('@features/tasks/utils/priorityLabel', () => ({
  getPriorityLabel: (_t: TFunction, p: string) => p,
}));

jest.mock('@mui/x-charts/BarChart', () => ({
  BarChart: () => <div data-testid="bar-chart" />,
}));


describe('TaskCompletionChart', () => {
  it('should render successfully', () => {
    const tasks = createMockTasks();

    const { baseElement } = renderWithTheme(<TaskCompletionChart tasks={tasks} />);

    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
    expect(screen.getByText('tasks:tasksByPriority.header')).toBeInTheDocument();
  });
});
