import './TaskCompletionChart.module.scss';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { PRIORITIES } from '@shared/types/task';
import { ITask } from '@features/tasks/models/task';
import { useMemo } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

interface TaskCompletionChartProps {
  tasks: ITask[];
}

export function TaskCompletionChart(props: TaskCompletionChartProps) {
  const theme = useTheme();

  const { completedCounts, activeCounts } = useMemo(() => {
    const completed = PRIORITIES.map(
      (p) => props.tasks.filter((t) => t.priority === p && t.completed).length
    );
    const active = PRIORITIES.map(
      (p) => props.tasks.filter((t) => t.priority === p && !t.completed).length
    );
    return { completedCounts: completed, activeCounts: active };
  }, [props.tasks]);

  return (
    <Paper elevation={0} sx={{ py: 2 }}>
      <Typography variant="h5" gutterBottom>
        Tasks by priority
      </Typography>

      <Box sx={{ height: 260 }}>
        <BarChart
          height={260}
          xAxis={[
            {
              scaleType: 'band',
              data: Array.from(PRIORITIES),
            },
          ]}
          series={[
            {
              label: 'Completed',
              data: completedCounts,
              color: theme.palette.success.main
            },
            {
              label: 'Active',
              data: activeCounts,
              color: theme.palette.error.main
            }
          ]}
          yAxis={[{ min: 0 }]}
          grid={{ horizontal: true, vertical: true }}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' }
            }
          }}
        />
      </Box>
    </Paper>
  );
}

export default TaskCompletionChart;
