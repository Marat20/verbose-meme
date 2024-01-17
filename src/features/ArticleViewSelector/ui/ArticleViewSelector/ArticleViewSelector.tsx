import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewType = [
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
  (props) => {
    const { view, onViewClick, className = '' } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
      onViewClick(newView);
    };

    return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {viewType.map((viewType) => {
          return (
            <Button
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}>
              <Icon
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
                Svg={viewType.icon}
              />
            </Button>
          );
        })}
      </div>
    );
  }
);
