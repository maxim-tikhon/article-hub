import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = props => {
  const {
    className, children, theme, square, size = ButtonSize.M, ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.button, className, cls[theme], cls[size], { [cls.square]: square })}
      {...otherProps}
    >
      {children}
    </button>
  );
};
