import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, className)}>
      <Input type="text" className={cls.input} placeholder={t('Enter username')} autoFocus />
      <Input type="password" className={cls.input} placeholder={t('Enter password')} />
      <Button className={cls.loginBtn}>{t('Login')}</Button>
    </div>
  );
};
