import { FunctionComponent, SVGAttributes, memo } from 'react';
import classNames from 'classnames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: FunctionComponent<SVGAttributes<SVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;

  return (
    <Svg className={classNames(cls.icon, className)} />
  );
});
