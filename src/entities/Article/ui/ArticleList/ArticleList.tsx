import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  Text as TextDeprecated,
  TextSize as TextSizeDeprecated,
} from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
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
    className,
    target,
    view = ArticleView.SMALL,
  } = props;

  const { t } = useTranslation();

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={<Text size="size_l" title={t('Articles not found')} />}
          off={
            <TextDeprecated
              size={TextSizeDeprecated.L}
              title={t('Articles not found')}
            />
          }
        />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <HStack
          wrap="wrap"
          gap="16"
          data-testid="ArticleList"
          className={classNames(cls.ArticleListRedesigned, {}, [])}
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeleton(view)}
        </HStack>
      }
      off={
        <div
          data-testid="ArticleList"
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeleton(view)}
        </div>
      }
    />
  );
});
