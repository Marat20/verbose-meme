import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return <Page data-testid='MainPage'>{t('Main')}</Page>;
};

export default MainPage;
