import { Page } from '@/widgets/Page/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return <Page>{t('Main')}</Page>;
};

export default MainPage;
