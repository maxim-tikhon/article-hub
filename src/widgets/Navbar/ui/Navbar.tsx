import classNames from 'classnames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(className, cls.navbar)}>
    <div className={cls.links} />
  </div>
);
