import AppIcon from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

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
