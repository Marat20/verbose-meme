import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import {
  TextAlign as TextAlignDeprecated,
  Text as TextDeprecated,
  TextTheme as TextThemeDeprecated,
} from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  readonly?: boolean;
  error?: string;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <LoaderDeprecated />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <TextDeprecated
          align={TextAlignDeprecated.CENTER}
          theme={TextThemeDeprecated.ERROR}
          title={t('There was an error loading profile')}
          text={t('Try refreshing the page')}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Card
          padding="24"
          fullWidth
          className={classNames(cls.ProfileCardRedesigned, mods, [className])}
        >
          <HStack
            gap="24"
            max
          >
            <VStack
              gap="16"
              max
            >
              <Input
                value={data?.firstname}
                placeholder={t('First name')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
              />
              <Input
                value={data?.lastname}
                placeholder={t('Last name')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
              />
              <Input
                value={data?.age}
                placeholder={t('Age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
              />
              <Input
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
              />
            </VStack>
            <VStack
              gap="16"
              max
            >
              <Input
                value={data?.username}
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
              />
              <Input
                value={data?.avatar}
                placeholder={t('Avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
              />
              <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
              />

              <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
              />
            </VStack>
          </HStack>
        </Card>
      }
      off={
        <VStack
          gap="8"
          max
          className={classNames(cls.ProfileCard, mods, [className])}
        >
          {data?.avatar && (
            <HStack
              justify="center"
              max
              className={cls.avatarWrapper}
            >
              <AvatarDeprecated src={data.avatar} />
            </HStack>
          )}
          <InputDeprecated
            value={data?.firstname}
            placeholder={t('First name')}
            className={cls.input}
            onChange={onChangeFirstname}
            readonly={readonly}
            data-testid="ProfileCard.firstname"
          />
          <InputDeprecated
            value={data?.lastname}
            placeholder={t('Last name')}
            className={cls.input}
            onChange={onChangeLastname}
            readonly={readonly}
            data-testid="ProfileCard.lastname"
          />
          <InputDeprecated
            value={data?.age}
            placeholder={t('Age')}
            className={cls.input}
            onChange={onChangeAge}
            readonly={readonly}
          />
          <InputDeprecated
            value={data?.city}
            placeholder={t('City')}
            className={cls.input}
            onChange={onChangeCity}
            readonly={readonly}
          />
          <InputDeprecated
            value={data?.username}
            placeholder={t('Username')}
            className={cls.input}
            onChange={onChangeUsername}
            readonly={readonly}
          />
          <InputDeprecated
            value={data?.avatar}
            placeholder={t('Avatar')}
            className={cls.input}
            onChange={onChangeAvatar}
            readonly={readonly}
          />
          <CurrencySelect
            className={cls.input}
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
          />

          <CountrySelect
            className={cls.input}
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
          />
        </VStack>
      }
    />
  );
};
