import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  ProfileCard,
  ProfileReducer,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
} from 'entities/Profile';
import { ProfileActions } from 'entities/Profile/model/slice/profileSlice';
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: ProfileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ firstname: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );
  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(ProfileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(ProfileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          readonly={readonly}
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
