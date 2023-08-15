import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import { ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className, to, theme = AppLinkTheme.PRIMARY, children, ...otherProps
  } = props;

  return (
    <Link className={classNames(cls.appLink, className, cls[theme])} to={to} {...otherProps}>
      {children}
    </Link>
  );
});
