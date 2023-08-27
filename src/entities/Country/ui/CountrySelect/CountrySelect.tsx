import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = Object.entries(Country).map(val => ({ value: val[0], content: val[1] }));

export const CountrySelect = memo(({
  className, value, onChange, readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      onChange={onChangeHandler}
      value={value}
      defaultValue={t('Select country')}
      label={t('Select country')}
      items={options}
      readonly={readonly}
      direction="top right"
    />
  );
});
