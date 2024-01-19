import { ArticleList } from '@/entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/ArticlesPageSelectors';
import { getArticles } from '../../model/slice/articlesPageSlice';

interface ArticlesInfiniteListProps {
  className?: string;
}

export const ArticlesInfiniteList: FC<ArticlesInfiniteListProps> = memo(
  (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
      return <Text text={t('Error loading articles')} />;
    }

    return (
      <ArticleList
        className={className}
        isLoading={isLoading}
        view={view}
        articles={articles}
      />
    );
  },
);
