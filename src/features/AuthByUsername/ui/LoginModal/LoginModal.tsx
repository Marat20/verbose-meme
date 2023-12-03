import { FC, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ onClose, isOpen }) => (
  <Modal lazy onClose={onClose} isOpen={isOpen}>
    <Suspense fallback={<Loader />}>
      <LoginFormLazy />
    </Suspense>
  </Modal>
);
