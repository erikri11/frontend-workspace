import { screen } from '@testing-library/react';
import { TFunction } from 'i18next';
import TaskCompletionChart from './TaskCompletionChart';
import { renderWithTheme } from '@test-utils/renderWithTheme';
import { createMockTasks } from '@test-utils/tasks/mockTaskCompletionChart';
import { PRIORITY_ORDER } from '@shared/types/task';

jest.mock('@features/tasks/utils/priorityLabel', () => ({
  getPriorityLabel: (_t: TFunction, p: string) => `LBL_${p}`,
}));

const mockBarChart = jest.fn((_props: any) => <div data-testid="bar-chart" />);

jest.mock('@mui/x-charts/BarChart', () => ({
  BarChart: (props: any) => mockBarChart(props),
}));

describe('TaskCompletionChart', () => {
  beforeEach(() => {
    mockBarChart.mockClear();
  });

  it('handles empty tasks', () => {
    renderWithTheme(<TaskCompletionChart tasks={[]} />);

    expect(mockBarChart).toHaveBeenCalledTimes(1);
    const chartProps = mockBarChart.mock.calls[0][0];

    expect(chartProps.series[0].data).toEqual(PRIORITY_ORDER.map(() => 0));
    expect(chartProps.series[1].data).toEqual(PRIORITY_ORDER.map(() => 0));
  });

  it('renders heading + chart', () => {
    renderWithTheme(<TaskCompletionChart tasks={createMockTasks()} />);

    expect(mockBarChart).toHaveBeenCalledTimes(1);
    const chartProps = mockBarChart.mock.calls[0][0];

    expect(chartProps.series[0].data).toHaveLength(3);
    expect(chartProps.series[1].data).toHaveLength(3);

    expect(screen.getByText('tasks:tasksByPriority.header')).toBeInTheDocument();
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
  });

  it('passes correct xAxis labels, series labels and computed counts to BarChart', () => {
    const tasks = createMockTasks();
    renderWithTheme(<TaskCompletionChart tasks={tasks} />);

    expect(mockBarChart).toHaveBeenCalledTimes(1);
    const chartProps = mockBarChart.mock.calls[0][0];

    expect(chartProps.xAxis).toEqual([
      { scaleType: 'band', data: PRIORITY_ORDER.map((p) => `LBL_${p}`) }
    ]);

    expect(chartProps.series[0].label).toBe('common:completed');
    expect(chartProps.series[1].label).toBe('common:active');

    const expectedCompleted = PRIORITY_ORDER.map(
      (p) => tasks.filter((t) => t.priority === p && t.completed).length
    );
    const expectedActive = PRIORITY_ORDER.map(
      (p) => tasks.filter((t) => t.priority === p && !t.completed).length
    );

    expect(chartProps.series[0].data).toEqual(expectedCompleted);
    expect(chartProps.series[1].data).toEqual(expectedActive);

    expect(chartProps.yAxis).toEqual([{ min: 0 }]);
    expect(chartProps.grid).toEqual({ horizontal: true, vertical: true });
    expect(chartProps.slotProps?.legend).toEqual({
      position: { vertical: 'bottom', horizontal: 'center' }
    });
    expect(chartProps.height).toBe(260);
  });
});
