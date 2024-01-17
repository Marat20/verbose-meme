import { ArticleSortFiels } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/Select';
import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortFiels;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortFiels) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
  (props) => {
    const { sort, order, onChangeOrder, onChangeSort, className } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => {
      return [
        {
          value: 'asc',
          content: t('Ascending'),
        },
        {
          value: 'desc',
          content: t('Descending'),
        },
      ];
    }, [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortFiels>[]>(() => {
      return [
        {
          value: ArticleSortFiels.CREATED,
          content: t('Date of creation'),
        },
        {
          value: ArticleSortFiels.TITLE,
          content: t('Title'),
        },
        {
          value: ArticleSortFiels.VIEWS,
          content: t('Views'),
        },
      ];
    }, [t]);

    return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
        <Select
          options={sortFieldOptions}
          value={sort}
          label={t('Sort by')}
          onChange={onChangeSort}
        />
        <Select
          options={orderOptions}
          value={order}
          label={t('by')}
          onChange={onChangeOrder}
          className={cls.order}
        />
      </div>
    );
  }
);
