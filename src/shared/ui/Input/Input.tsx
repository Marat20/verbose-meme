import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  }) => {
    const [focused, setFocused] = useState(false);
    const [caretPostion, setCaretPostion] = useState(0);

    useEffect(() => {
      if (autofocus) {
        setFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPostion(e.target.value.length);
    };

    const onBlur = () => {
      setFocused(false);
    };
    const onFocus = () => {
      setFocused(true);
    };

    const onSelect = (e: any) => {
      setCaretPostion(e?.target?.selectionStart || 0);
    };

    return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
        {placeholder && (
          <div className={cls.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={cls.caretWrapper}>
          <input
            ref={ref}
            className={cls.input}
            type={type}
            value={value}
            onChange={onChangeHandler}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            {...otherProps}
          />
          {focused && (
            <span
              style={{ left: `${caretPostion * 7}px` }}
              className={cls.caret}></span>
          )}
        </div>
      </div>
    );
  }
);
