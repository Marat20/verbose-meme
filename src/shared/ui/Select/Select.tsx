import { ChangeEvent, FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props) => {
  const { className, label, options, value, onChange, readonly } = props;

  const optionList = useMemo(() => {
    return options?.map((opt) => {
      return (
        <option className={cls.option} key={opt.value} value={opt.value}>
          {opt.content}
        </option>
      );
    });
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{label + '>'}</span>}
      <select
        disabled={readonly}
        value={value}
        className={cls.select}
        onChange={onChangeHandler}>
        {optionList}
      </select>
    </div>
  );
});
