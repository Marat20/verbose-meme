import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={classNames(cls.PageLoader, {}, [])}>
      <Loader />
    </div>
  );
};
