import { RatingCard } from '@/entities/Rating';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

export const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <RatingCard
      title={t('Estimate article')}
      feedbackTitle={t('Place for feedback')}
      hasFeedback
    />
  );
});
