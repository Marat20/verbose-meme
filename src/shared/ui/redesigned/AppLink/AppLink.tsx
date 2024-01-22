import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, HTMLAttributeAnchorTarget, ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const { className, children, target, to, variant = 'primary' } = props;
  return (
    <Link
      target={target}
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[variant]])}
    >
      {children}
    </Link>
  );
});
