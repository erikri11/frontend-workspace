import './Products.module.scss';
import { Box } from '@mui/material';
import { PageTitle } from '@widgets/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';

export function Products() {
  const { t } = useTranslation();

  return (
   <Box>
      <PageTitle title={t('products:pageTitle.title')} subtitle={t('products:pageTitle.subtitle')} />
      <h4>Welcome to Products!</h4>
    </Box>
  );
}

export default Products;
