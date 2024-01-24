import { FC, memo } from 'react';
import AppIcon from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo: FC<AppLogoProps> = memo((props) => {
  const { className, size = 50 } = props;

  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.AppLogoWrapper, {}, [className])}
    >
      <AppIcon
        color="black"
        width={size}
        height={size}
        className={cls.appLogo}
      />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
