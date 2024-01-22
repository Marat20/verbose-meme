import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, HTMLAttributeAnchorTarget, ReactNode, memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    className,
    children,
    target,
    to,
    activeClassName = '',
    variant = 'primary',
  } = props;
  return (
    <NavLink
      target={target}
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
    >
      {children}
    </NavLink>
  );
});
