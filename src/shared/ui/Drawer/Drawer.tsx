import { UseTheme } from 'app/providers/ThemeProvider';
import { FC, ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer: FC<DrawerProps> = memo((props) => {
  const { className, children, isOpen, onClose } = props;
  const { theme } = UseTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [
          className,
          theme,
          'app_drawer',
        ])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
