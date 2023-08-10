import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = props => {
  const {
    className, to, theme = AppLinkTheme.PRIMARY, children, ...otherProps
  } = props;

  return (
    <Link className={classNames(cls.appLink, className, cls[theme])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};
