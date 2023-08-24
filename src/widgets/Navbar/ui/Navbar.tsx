import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const authData = useSelector(getUserAuthData);
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
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={logout}
        >
          {t('Logout')}
        </Button>
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
