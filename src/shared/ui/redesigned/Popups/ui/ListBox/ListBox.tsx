import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icon';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
  onChange: (value: T) => void;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'bottom right',
  } = props;

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(
    () => items?.find((item) => item.value === value),
    [value, items],
  );

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as="div" className={cls.trigger}>
          <Button
            addonRight={<Icon Svg={ArrowIcon} />}
            variant="filled"
            disabled={readonly}
          >
            {selectedItem?.content ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: item.disabled,
                      [popupCls.selected]: selected,
                    },
                    [],
                  )}
                >
                  {selected}
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
