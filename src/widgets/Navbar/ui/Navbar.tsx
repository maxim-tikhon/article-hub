import classNames from 'classnames';
import { useCallback, useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModalOpen(prev => !prev);
  }, []);

  return (
    <div className={classNames(className, cls.navbar)}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleAuthModal}
      >
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={onToggleAuthModal}>
        😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊
      </Modal>
    </div>
  );
};
