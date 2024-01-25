import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.FRANCE, content: Country.FRANCE },
  { value: Country.OAE, content: Country.OAE },
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.SPAIN, content: Country.SPAIN },
  { value: Country.USA, content: Country.USA },
];

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  const countrySelectProps = {
    className: classNames('', {}, [className]),
    defaultValue: t('Country'),
    label: t('Country'),
    value,
    items: options,
    onChange: onChangeHandler,
    readonly,
    direction: 'top right' as const,
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...countrySelectProps} />}
      off={<ListBoxDeprecated {...countrySelectProps} />}
    />
  );
});
