import { FC, ReactNode, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export const Tabs: FC<TabsProps> = memo((props) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          onClick={clickHandle(tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
