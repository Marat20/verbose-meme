import { FC, memo } from 'react';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeaturesFunc } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonTheme as ButtonThemeDeprecated,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewType = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeaturesFunc({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeaturesFunc({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
  (props) => {
    const { view, onViewClick, className = '' } = props;

    const onClick = (newView: ArticleView) => () => {
      onViewClick(newView);
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card
            border="round"
            padding="8"
            className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
              className,
            ])}
          >
            <HStack gap="8">
              {viewType.map((viewType) => (
                <Icon
                  key={viewType.view}
                  clickable
                  onClick={onClick(viewType.view)}
                  className={classNames('', {
                    [cls.notSelected]: viewType.view !== view,
                  })}
                  Svg={viewType.icon}
                />
              ))}
            </HStack>
          </Card>
        }
        off={
          <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewType.map((viewType) => (
              <ButtonDeprecated
                key={viewType.view}
                theme={ButtonThemeDeprecated.CLEAR}
                onClick={onClick(viewType.view)}
              >
                <IconDeprecated
                  width={24}
                  height={24}
                  className={classNames('', {
                    [cls.notSelected]: viewType.view !== view,
                  })}
                  Svg={viewType.icon}
                />
              </ButtonDeprecated>
            ))}
          </div>
        }
      />
    );
  },
);
