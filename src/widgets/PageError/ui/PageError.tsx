import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const reload = () => location.reload();

  return (
    <div className={classNames(cls.PageError, {}, [])}>
      <p>{t('Something went wrong')}</p>
      <Button onClick={reload}>{t('Reload')}</Button>
    </div>
  );
};
