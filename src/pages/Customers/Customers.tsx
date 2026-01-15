import './Customers.module.scss';
import { Box } from '@mui/material';
import { PageTitle } from '@widgets/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';

export function Customers() {
  const { t } = useTranslation();

  return (
    <Box>
      <PageTitle title={t('customers:pageTitle.title')} subtitle={t('customers:pageTitle.subtitle')} />
      <h4>Welcome to Customers!</h4>
    </Box>
  );
}

export default Customers;
