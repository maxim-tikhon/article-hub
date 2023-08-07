import classNames from 'classnames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames('lds-ellipsis', className)}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
