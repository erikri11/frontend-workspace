import './TaskCompletionChart.module.scss';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartOptions, ChartData, Plugin} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { PRIORITIES } from '@shared/types/task';
import { ITask } from '@features/tasks/models/task';
import { useMemo } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface TaskCompletionChartProps {
  tasks: ITask[];
}

export function TaskCompletionChart(props: TaskCompletionChartProps) {
  const theme = useTheme();

  const { completedCounts, activeCounts } = useMemo(() => {
    const completed = PRIORITIES.map(
      p => props.tasks.filter(t => t.priority === p && t.completed).length
    );
    const active = PRIORITIES.map(
      p => props.tasks.filter(t => t.priority === p && !t.completed).length
    );
    return { completedCounts: completed, activeCounts: active };
  }, [props.tasks]);

  const data: ChartData<'bar'> = useMemo(() => ({
    labels: Array.from(PRIORITIES), 
    datasets: [
      {
        label: 'Completed',
        data: completedCounts,
        backgroundColor: theme.palette.success.main,
        borderColor: theme.palette.background.paper,
        borderWidth: 1,
        borderRadius: 6,
      },
      {
        label: 'Active',
        data: activeCounts,
        backgroundColor: theme.palette.error.main,
        borderColor: theme.palette.background.paper,
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  }), [completedCounts, activeCounts, theme]);

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { intersect: false },
    },
    scales: {
      x: {
        grid: { display: true, color: theme.palette.divider },
      },
      y: {
        beginAtZero: true,
        ticks: { precision: 0 },
        grid: { color: theme.palette.divider },
      },
    },
  };

  const backgroundColorPlugin: Plugin<'bar'> = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart) => {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;
      ctx.save();
      ctx.fillStyle = 'transparent';
      ctx.fillRect(chartArea.left, chartArea.top, chartArea.width, chartArea.height);
      ctx.restore();
    },
  };

  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Tasks by priority
      </Typography>
      <Box sx={{ height: 260 }}>
        <Bar data={data} options={options} plugins={[backgroundColorPlugin]} />
      </Box>
    </Paper>
  );
}

export default TaskCompletionChart;
