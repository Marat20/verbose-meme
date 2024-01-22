import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import cls from './Text.module.scss';

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    text,
    title,
    'data-testid': dataTestId = 'Text',
    align = TextAlign.LEFT,
    theme = TextTheme.PRIMARY,
    size = TextSize.M,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(cls.Text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size],
      ])}
    >
      {title && (
        <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p data-testid={`${dataTestId}.Pa ragraph`} className={cls.text}>
          {text}
        </p>
      )}
    </div>
  );
});
