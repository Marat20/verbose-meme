import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticleCreate } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeaturesFunc } from '@/shared/lib/features';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme as AppLinkThemeDeprecated,
} from '@/shared/ui/deprecated/AppLink';
import {
  Button as ButtonDeprecated,
  ButtonTheme as ButtonThemeDeprecated,
} from '@/shared/ui/deprecated/Button';
import {
  Text as TextDeprecated,
  TextTheme as TextThemeDeprecated,
} from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const mainClass = toggleFeaturesFunc({
    name: 'isAppRedesigned',
    on: () => cls.NavbarRedesigned,
    off: () => cls.Navbar,
  });

  if (authData) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <header className={classNames(mainClass, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.Navbar, {}, [className])}>
            <TextDeprecated
              theme={TextThemeDeprecated.INVERTED}
              className={cls.appName}
              title={'Marat'}
            />
            <AppLinkDeprecated
              className={cls.createBtn}
              theme={AppLinkThemeDeprecated.SECONDARY}
              to={getRouteArticleCreate()}
            >
              {t('Create an article')}
            </AppLinkDeprecated>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Button
            variant="clear"
            className={classNames(cls.links)}
            onClick={onShowModal}
          >
            {t('Login')}
          </Button>
        }
        off={
          <ButtonDeprecated
            theme={ButtonThemeDeprecated.CLEAR_INVERTED}
            className={classNames(cls.links)}
            onClick={onShowModal}
          >
            {t('Login')}
          </ButtonDeprecated>
        }
      />

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
