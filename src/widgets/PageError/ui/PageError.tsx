import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = (props: PageErrorProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.pageError, className)}>
      <p>{t('Something went wrong')}</p>
      <Button onClick={reloadPage}>{t('Refresh page')}</Button>
    </div>
  );
};
