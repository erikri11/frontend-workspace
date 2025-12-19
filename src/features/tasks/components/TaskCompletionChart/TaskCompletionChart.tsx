import './TaskCompletionChart.module.scss';
import { useTranslation } from 'react-i18next';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { Priority, PRIORITY_ORDER } from '@shared/types/task';
import { ITask } from '@features/tasks/models/task';
import { useMemo } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { getPriorityLabel } from '@features/tasks/utils/priorityLabel';

interface TaskCompletionChartProps {
  tasks: ITask[];
}

export function TaskCompletionChart(props: TaskCompletionChartProps) {
  const theme = useTheme();
  const { t } = useTranslation(['common', 'tasks']);

  const { completedCounts, activeCounts } = useMemo(() => {
    const completed = PRIORITY_ORDER.map(
      (p) => props.tasks.filter((t) => t.priority === p && t.completed).length
    );
    const active = PRIORITY_ORDER.map(
      (p) => props.tasks.filter((t) => t.priority === p && !t.completed).length
    );
    return { completedCounts: completed, activeCounts: active };
  }, [props.tasks]);

  return (
    <Paper elevation={0} sx={{ py: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('tasks:tasksByPriority.header')}
      </Typography>

      <Box sx={{ height: 260 }}>
        <BarChart
          height={260}
          xAxis={[
            {
              scaleType: 'band',
              data: Array.from(PRIORITY_ORDER, 
                (p: Priority) => getPriorityLabel(t, p))
            }
          ]}
          series={[
            {
              label: t('common:completed'),
              data: completedCounts,
              color: theme.palette.success.main
            },
            {
              label: t('common:active'),
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
