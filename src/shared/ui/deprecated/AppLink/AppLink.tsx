import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, HTMLAttributeAnchorTarget, ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */
export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    className,
    children,
    target,
    to,
    theme = AppLinkTheme.PRIMARY,
  } = props;
  return (
    <Link
      target={target}
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
});
