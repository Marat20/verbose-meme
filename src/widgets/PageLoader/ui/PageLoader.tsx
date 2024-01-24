import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import cls from './PageLoader.module.scss';

export const PageLoader = () => (
  <div className={classNames(cls.PageLoader, {}, [])}>
    <Loader />
  </div>
);
