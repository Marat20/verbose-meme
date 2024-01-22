import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { HStack } from '../Stack';
import { Text } from '../Text';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    label,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const input = (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      <div className={cls.addonLeft}>{addonLeft}</div>
      <input
        ref={ref}
        className={cls.input}
        type={type}
        readOnly={readonly}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocus}
        placeholder={placeholder}
        onBlur={onBlur}
        {...otherProps}
      />
      <div className={cls.addonRight}>{addonRight}</div>
    </div>
  );

  if (label) {
    return (
      <HStack
        gap="8"
        max
      >
        <Text text={label} />
      </HStack>
    );
  }

  return input;
});
