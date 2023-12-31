import { FunctionComponent, SVGAttributes, memo } from 'react';
import classNames from 'classnames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: FunctionComponent<SVGAttributes<SVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const {
    className, Svg, inverted, ...otherProps
  } = props;

  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.icon, className)} {...otherProps} />
  );
});
