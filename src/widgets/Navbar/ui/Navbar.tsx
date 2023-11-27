import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={classNames(cls.links)} onClick={onToggleModal}>
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        necessitatibus pariatur nostrum molestiae excepturi quidem omnis ipsam
        dolorum tenetur, maxime, vero animi eligendi blanditiis velit
        perspiciatis esse. Magni, perspiciatis saepe.
      </Modal>
    </div>
  );
};
