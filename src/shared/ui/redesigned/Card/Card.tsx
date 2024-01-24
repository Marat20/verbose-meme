import { FC, HTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  fullWidth?: boolean;
  fullHeight?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap0',
  '8': 'gap8',
  '16': 'gap16',
  '24': 'gap24',
};

export const Card: FC<CardProps> = memo((props) => {
  const {
    children,
    className,
    fullWidth,
    fullHeight,
    variant = 'normal',
    padding = '8',
    border = 'normal',
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.fullWidth]: fullWidth,
    [cls.fullHeight]: fullHeight,
  };

  const paddingClass = mapPaddingToClass[padding];

  const optionsClasses = [
    className,
    cls[variant],
    cls[paddingClass],
    cls[border],
  ];

  return (
    <div className={classNames(cls.Card, mods, optionsClasses)} {...otherProps}>
      {children}
    </div>
  );
});
