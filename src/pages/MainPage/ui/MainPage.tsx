import { RatingCard } from '@/entities/Rating';
import { Page } from '@/widgets/Page/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t('Main')}
      <RatingCard
        title='Как вам статья?'
        feedbackTitle='Добавьте комментарий'
      />
    </Page>
  );
};

export default MainPage;
