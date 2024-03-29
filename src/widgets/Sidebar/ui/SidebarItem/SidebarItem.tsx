import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          className={classNames(cls.itemRedesigned, {
            [cls.collapsedRedesigned]: collapsed,
          })}
          to={item.path}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span className={classNames(cls.link)}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          className={classNames(cls.item, { [cls.collapsed]: collapsed })}
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
        >
          <item.Icon className={cls.icon} />
          <span className={classNames(cls.link)}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});
