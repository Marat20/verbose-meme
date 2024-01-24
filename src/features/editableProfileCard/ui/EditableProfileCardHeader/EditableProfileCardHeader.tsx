import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme as ButtonThemeDeprecated,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
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
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Card padding="24" fullWidth border="partial">
            <HStack
              max
              justify="between"
              className={classNames('', {}, [className])}
            >
              <Text title={t('Profile')} />
              {canEdit && (
                <>
                  {readonly ? (
                    <Button
                      data-testid={'EditableProfileCardHeader.EditButton'}
                      onClick={onEdit}
                    >
                      {t('Edit')}
                    </Button>
                  ) : (
                    <HStack gap="8">
                      <Button
                        data-testid={'EditableProfileCardHeader.CancelButton'}
                        onClick={onCancelEdit}
                        color="error"
                      >
                        {t('Cancel')}
                      </Button>
                      <Button
                        data-testid={'EditableProfileCardHeader.SaveButton'}
                        onClick={onSave}
                        color="success"
                      >
                        {t('Save')}
                      </Button>
                    </HStack>
                  )}
                </>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}
          >
            <TextDeprecated title={t('Profile')} />
            {canEdit && (
              <>
                {readonly ? (
                  <ButtonDeprecated
                    data-testid={'EditableProfileCardHeader.EditButton'}
                    theme={ButtonThemeDeprecated.OUTLINE}
                    onClick={onEdit}
                  >
                    {t('Edit')}
                  </ButtonDeprecated>
                ) : (
                  <HStack gap="8">
                    <ButtonDeprecated
                      data-testid={'EditableProfileCardHeader.CancelButton'}
                      theme={ButtonThemeDeprecated.OUTLINE_RED}
                      onClick={onCancelEdit}
                    >
                      {t('Cancel')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      data-testid={'EditableProfileCardHeader.SaveButton'}
                      theme={ButtonThemeDeprecated.OUTLINE}
                      onClick={onSave}
                    >
                      {t('Save')}
                    </ButtonDeprecated>
                  </HStack>
                )}
              </>
            )}
          </HStack>
        }
      />
    );
  });
