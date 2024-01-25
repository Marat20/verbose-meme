import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

import cls from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const reload = () => window.location.reload();

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div className={classNames(cls.PageError, {}, [])}>
          <p>{t('Something went wrong')}</p>
          <Button onClick={reload}>{t('Reload')}</Button>
        </div>
      }
      off={
        <div className={classNames(cls.PageError, {}, [])}>
          <p>{t('Something went wrong')}</p>
          <ButtonDeprecated onClick={reload}>{t('Reload')}</ButtonDeprecated>
        </div>
      }
    />
  );
};
