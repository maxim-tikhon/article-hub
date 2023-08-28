import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUserName';
import {
  getUserAuthData,
} from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import cls from './Navbar.module.scss';
import { RoutePath } from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const authData = useSelector(getUserAuthData);

  const cloesAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const showAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(className, cls.navbar)}>
        <Text
          className={cls.appName}
          title={t('Article Hub')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Create article')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(className, cls.navbar)}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={showAuthModal}
      >
        {t('Login')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={cloesAuthModal} />
    </header>
  );
});
