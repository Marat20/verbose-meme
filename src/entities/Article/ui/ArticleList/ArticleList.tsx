import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeleton = (view: ArticleView) =>
  new Array(view === ArticleView.BIG ? 3 : 9).fill(0).map((_, index) => {
    return (
      <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    );
  });

export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {
    articles,
    isLoading,
    view = ArticleView.SMALL,
    className = '',
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        className={cls.card}
        key={article.id}
        article={article}
        view={view}
      />
    );
  };

  return (
    <>
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles.length > 0 ? articles.map(renderArticle) : null}
      </div>
      {isLoading && (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {getSkeleton(view)}
        </div>
      )}
    </>
  );
});
