import './app.module.scss'
import TasksPage from '@pages/TasksPage/TasksPage';
import DashboardLayout from '@layouts/DashboardLayout';

export function App() {
  return (
    <DashboardLayout>
      <TasksPage />
    </DashboardLayout>
  );
}

export default App;
