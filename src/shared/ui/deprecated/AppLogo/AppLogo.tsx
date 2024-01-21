import AppIcon from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';

interface AppLogoProps {
  className?: string;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export const AppLogo: FC<AppLogoProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.AppLogo, {}, [className])}
    >
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
      <AppIcon />
    </HStack>
  );
});
