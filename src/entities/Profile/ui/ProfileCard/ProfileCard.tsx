import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Profile } from '../../model/types/profile';
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

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
  const { isLoading, error, className } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
};
