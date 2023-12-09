import {
  ProfileCard,
  ProfileReducer,
  fetchProfileData,
} from 'entities/Profile';
import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: ProfileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
