import classNames from 'classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(className, cls.navbar)}>
    <div className={cls.links}>
      <AppLink
        className={cls['main-link']}
        to="/"
        theme={AppLinkTheme.SECONDARY}
      >
        Main
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
    </div>
  </div>
);
