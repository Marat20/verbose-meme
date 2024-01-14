import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
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
    virtualized = true,
    view = ArticleView.SMALL,
  } = props;

  const isBig = view === ArticleView.BIG;
  const itemsPerProp = isBig ? 1 : 3;
  const rowCount = isBig
    ? articles.length
    : Math.ceil(articles.length / itemsPerProp);
  const { t } = useTranslation();

  const rowRenderer = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerProp;
    const toIndex = Math.min(fromIndex + itemsPerProp, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          className={cls.card}
          article={articles[index]}
          view={view}
          target={target}
          key={articles[index].id}
        />
      );
    }

    return (
      <div className={cls.row} key={key} style={style}>
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Articles not found')} />
      </div>
    );
  }

  return (
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          ref={() => registerChild}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {virtualized ? (
            <List
              autoHeight
              height={height ?? 700}
              width={width ? width - 80 : 700}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRenderer}
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((item) => (
              <ArticleListItem
                article={item}
                view={view}
                target={target}
                key={item.id}
                className={cls.card}
              />
            ))
          )}
          {isLoading && getSkeleton(view)}
        </div>
      )}
    </WindowScroller>
  );
});
