import { ArticleSortFiels, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortFiels;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortFiels) => void;
  onChangeType: (type: ArticleType) => void;
  onChangeSearch: (value: string) => void;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = memo((props) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
    search,
    type,
  } = props;

  const { t } = useTranslation();

  return (
    <Card
      padding="24"
      className={classNames(cls.ArticlesFilters, {}, [className])}
    >
      <VStack gap="32">
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Search')}
          addonLeft={<Icon Svg={SearchIcon} />}
        />
        <ArticleTypeTabs
          className={cls.tabs}
          value={type}
          onChangeType={onChangeType}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
