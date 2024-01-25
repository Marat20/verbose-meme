import { CSSProperties, FC, useMemo } from 'react';

import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { className, src, size = 100, alt } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;
  const fallback = <Skeleton width={size} height={size} border="50%" />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      className={classNames(cls.Avatar, {}, [className])}
      style={styles}
    />
  );
};
