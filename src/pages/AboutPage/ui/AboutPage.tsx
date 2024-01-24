import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return <Page data-testid="AboutPage">{t('About us')}</Page>;
};

export default AboutPage;
