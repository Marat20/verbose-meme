import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { FC, HTMLAttributes, ReactNode, memo } from 'react';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  fullWidth?: boolean;
  padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

export const Card: FC<CardProps> = memo((props) => {
  const {
    children,
    className,
    fullWidth,
    variant = 'normal',
    padding = '8',
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.fullWidth]: fullWidth,
  };

  const optionsClasses = [className, cls[variant], mapPaddingToClass[padding]];

  return (
    <div
      className={classNames(cls.Card, mods, optionsClasses)}
      {...otherProps}
    >
      {children}
    </div>
  );
});
