import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  className,
  onClose,
  isOpen,
}) => (
  <Modal
    lazy
    onClose={onClose}
    isOpen={isOpen}
    className={classNames(cls.LoginModal, {}, [className])}>
    <LoginForm />
  </Modal>
);
