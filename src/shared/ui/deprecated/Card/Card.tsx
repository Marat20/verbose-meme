import { FC, HTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  fullWidth?: boolean;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export const Card: FC<CardProps> = memo((props) => {
  const {
    children,
    className,
    fullWidth,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, { [cls.fullWidth]: fullWidth }, [
        className,
        cls[theme],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
