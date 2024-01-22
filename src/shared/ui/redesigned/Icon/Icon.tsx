import { classNames } from '@/shared/lib/classNames/classNames';
import React, { FC, memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon: FC<IconProps> = memo((props) => {
  const { className, Svg, inverted, ...otherProps } = props;

  return (
    <Svg
      className={classNames(cls.Icon, {}, [className])}
      {...otherProps}
    />
  );
});
