import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import classNames from 'classnames';
import { useModal } from 'shared/lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen,
    lazy,
  } = props;
  const { theme } = useTheme();
  const { close, isClosing, isMounted } = useModal({ animationDelay: 300, onClose, isOpen });

  const mods = { [cls.opened]: isOpen, [cls.isClosing]: isClosing };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.drawer, className, theme, mods)}>
        <Overlay onClick={close} />
        <div
          className={cls.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});
