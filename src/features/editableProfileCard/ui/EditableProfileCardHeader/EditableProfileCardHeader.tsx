import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> =
  memo((props) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    // TODO поменять на другой метод
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(updateProfileData());
    }, [dispatch]);

    return (
      <HStack max justify="between" className={classNames('', {}, [className])}>
        <Text title={t('Profile')} />
        {canEdit && (
          <>
            {readonly ? (
              <Button
                data-testid={'EditableProfileCardHeader.EditButton'}
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t('Edit')}
              </Button>
            ) : (
              <HStack gap="8">
                <Button
                  data-testid={'EditableProfileCardHeader.CancelButton'}
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  data-testid={'EditableProfileCardHeader.SaveButton'}
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                >
                  {t('Save')}
                </Button>
              </HStack>
            )}
          </>
        )}
      </HStack>
    );
  });
