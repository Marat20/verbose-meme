import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer: FC<FiltersContainerProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  const {
    order,
    sort,
    onChangeType,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    search,
    type,
  } = useArticleFilters();

  return (
    <ArticlesFilters
      sort={sort}
      order={order}
      type={type}
      search={search}
      onChangeOrder={onChangeOrder}
      onChangeType={onChangeType}
      onChangeSearch={onChangeSearch}
      onChangeSort={onChangeSort}
      className={className}
    />
  );
});
