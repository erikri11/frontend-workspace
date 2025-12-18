import './TasksPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import TaskGrid from '@features/tasks/components/TaskGrid/TaskGrid';
import PageTitle from '@widgets/PageTitle/PageTitle';

export function TasksPage() {
  const { t } = useTranslation('tasks');

  return (
   <Box>
      <PageTitle title={t('tasks:pageTitle.title')} subtitle={t('tasks:pageTitle.subtitle')} />
      <TaskGrid  />
    </Box>
  );
}

export default TasksPage;
