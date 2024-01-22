import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, ReactNode, memo, useCallback } from 'react';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  flexDirection?: FlexDirection;
}

export const Tabs: FC<TabsProps> = memo((props) => {
  const { className, tabs, value, onTabClick, flexDirection = 'row' } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <Flex
      align="start"
      gap="8"
      direction={flexDirection}
      className={classNames(cls.Tabs, {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            border="round"
            variant={isSelected ? 'light' : 'normal'}
            className={classNames(cls.tab, { [cls.selected]: isSelected })}
            onClick={clickHandle(tab)}
            key={tab.value}
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
