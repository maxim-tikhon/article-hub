import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;
  const dispatch = useDispatch();

  const cloesAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const showAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

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
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
          items={[
            ...(isAdminPanelAvailable ? [{
              content: t('Admin panel'),
              href: RoutePath.admin_panel,
            }] : []),
            {
              content: t('Profile'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('Logout'),
              onClick: logout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
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
