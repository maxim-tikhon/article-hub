import classNames from 'classnames';
import { HTMLAttributes, ReactNode, memo } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(cls.card, className)} {...otherProps}>
      {children}
    </div>
  );
});