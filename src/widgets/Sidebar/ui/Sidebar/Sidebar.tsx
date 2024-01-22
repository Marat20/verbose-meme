import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonSize as ButtonSizeDeprecated,
  ButtonTheme as ButtonThemeDeprecated,
} from '@/shared/ui/deprecated/Button';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { FC, memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => setCollapsed((prev) => !prev);

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem
          item={item}
          collapsed={collapsed}
          key={item.path}
        />
      )),
    [collapsed, sidebarItemsList],
  );

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className],
          )}
        >
          <AppLogo
            size={collapsed ? 30 : 50}
            className={cls.appLogo}
          />
          <VStack
            role="navigation"
            gap="8"
            className={cls.items}
          >
            {itemsList}
          </VStack>
          <Icon
            Svg={ArrowIcon}
            clickable
            className={cls.collapsedBtn}
            data-testid="sidebar-toggle"
            onClick={onToggle}
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher
              short={collapsed}
              className={cls.lang}
            />
          </div>
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
        >
          <ButtonDeprecated
            className={cls.collapsedBtn}
            theme={ButtonThemeDeprecated.BACKGROUND_INVERTED}
            square
            size={ButtonSizeDeprecated.L}
            data-testid="sidebar-toggle"
            type="button"
            onClick={onToggle}
          >
            {collapsed ? '>' : '<'}
          </ButtonDeprecated>
          <VStack
            role="navigation"
            gap="8"
            className={cls.items}
          >
            {itemsList}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher
              short={collapsed}
              className={cls.lang}
            />
          </div>
        </aside>
      }
    />
  );
});
