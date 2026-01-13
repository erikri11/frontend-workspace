import { Box } from '@mui/material';
import './Orders.module.scss';
import PageTitle from '@widgets/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';
import { OrderGrid } from '@features/orders/components/OrderGrid/OrderGrid';

export function Orders() {
  const { t } = useTranslation('orders');
  
  return (
    <Box>
      <PageTitle title={t('orders:pageTitle.title')} subtitle={t('orders:pageTitle.subtitle')} />
      <OrderGrid  />
    </Box>
  );
}

export default Orders;
