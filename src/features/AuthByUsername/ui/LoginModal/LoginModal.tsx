import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ onClose, isOpen }) => (
  <Modal lazy onClose={onClose} isOpen={isOpen}>
    <LoginForm />
  </Modal>
);
