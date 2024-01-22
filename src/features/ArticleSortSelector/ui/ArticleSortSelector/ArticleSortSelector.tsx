import { ArticleSortFiels } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { SortOrder } from '@/shared/types/sort';
import {
  Select as SelectDeprecated,
  SelectOption as SelectOptionDeprecated,
} from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
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

    const orderOptions = useMemo<SelectOptionDeprecated<SortOrder>[]>(() => {
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

    const sortFieldOptions = useMemo<
      SelectOptionDeprecated<ArticleSortFiels>[]
    >(() => {
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
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <div
            className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
              className,
            ])}
          >
            <VStack gap="8">
              <Text text={t('Sort by')} />
              <ListBox
                items={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
              />
              <ListBox
                items={orderOptions}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
              />
            </VStack>
          </div>
        }
        off={
          <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <SelectDeprecated
              options={sortFieldOptions}
              value={sort}
              label={t('Sort by')}
              onChange={onChangeSort}
            />
            <SelectDeprecated
              options={orderOptions}
              value={order}
              label={t('by')}
              onChange={onChangeOrder}
            />
          </div>
        }
      />
    );
  },
);
