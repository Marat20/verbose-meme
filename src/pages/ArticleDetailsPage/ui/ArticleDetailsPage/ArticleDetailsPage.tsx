import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getFeatureFlags, toggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');

  const articleRatingCard = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id} />,
    off: () => null,
  });

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack
          gap="16"
          max
        >
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {articleRatingCard}
          <ArticleRecommendationsList />
          <ArticleDetailsComment id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
