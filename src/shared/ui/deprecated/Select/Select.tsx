import { classNames } from '@/shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly } = props;

  const optionList = useMemo(() => {
    return options?.map((opt) => {
      return (
        <option
          className={cls.option}
          key={opt.value}
          value={opt.value}
        >
          {opt.content}
        </option>
      );
    });
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{label + '>'}</span>}
      <select
        disabled={readonly}
        value={value}
        className={cls.select}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
};
