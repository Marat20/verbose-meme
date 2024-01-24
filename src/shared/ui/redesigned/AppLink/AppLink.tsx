import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, ForwardedRef, ReactNode, forwardRef } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
      className,
      children,
      to,
      activeClassName = '',
      variant = 'primary',
      ...otherProps
    } = props;
    return (
      <NavLink
        ref={ref}
        to={to}
        className={({ isActive }) =>
          classNames(cls.AppLink, { [activeClassName]: isActive }, [
            className,
            cls[variant],
          ])
        }
        {...otherProps}
      >
        {children}
      </NavLink>
    );
  },
);
