import { Listbox as HListBox } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
  onChange: <T extends string>(value: T) => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  top: cls.optionsTop,
  bottom: cls.optionsBottom,
};

export const ListBox: FC<ListBoxProps> = (props) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'bottom',
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap='4'>
      {label && <span>{label + '>'}</span>}
      <HListBox
        disabled={readonly}
        as={'div'}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}>
        <HListBox.Button className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}>
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [cls.active]: active,
                      [cls.disabled]: item.disabled,
                    },
                    []
                  )}>
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
