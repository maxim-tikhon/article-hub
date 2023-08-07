import classNames from 'classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(['', 'about']);

  return (
    <div className={classNames(className, cls.navbar)}>
      <div className={cls.links}>
        <AppLink
          className={cls['main-link']}
          to="/"
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Main')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t('About')}</AppLink>
      </div>
    </div>
  );
};
