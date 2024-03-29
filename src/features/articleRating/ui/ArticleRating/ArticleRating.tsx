import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { toggleFeaturesFunc } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import {
  useGetArticleRating,
  useRateArticle,
} from '../../api/articleRatingApi';

export interface ArticleRatingProps {
  articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
  const { articleId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutations] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsNumber: number, feedback?: string) => {
      try {
        rateArticleMutations({
          userId: userData?.id ?? '',
          articleId,
          rate: starsNumber,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, rateArticleMutations, userData?.id],
  );

  const onCancel = useCallback(
    (starsNumber: number) => {
      handleRateArticle(starsNumber);
    },
    [handleRateArticle],
  );

  const onAccept = useCallback(
    (starsNumber: number, feedback?: string) => {
      handleRateArticle(starsNumber, feedback);
    },
    [handleRateArticle],
  );

  const Skeleton = toggleFeaturesFunc({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      title={t('Estimate article')}
      feedbackTitle={t('Place for feedback')}
      hasFeedback
    />
  );
});

export default ArticleRating;
