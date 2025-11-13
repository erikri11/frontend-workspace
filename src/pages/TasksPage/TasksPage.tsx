import './TasksPage.module.scss';
import { Box } from '@mui/material';
import TaskGrid from '@features/tasks/components/TaskGrid/TaskGrid';
import PageTitle from '@widgets/PageTitle/PageTitle';

export function TasksPage() {
  return (
   <Box>
      <PageTitle title="Tasks" subtitle="Manage your tasks efficiently" />
      {/* Additional components for the TasksPage can be added here */}
      {/* Skeleton */}
      <TaskGrid  />
    </Box>
  );
}

export default TasksPage;
