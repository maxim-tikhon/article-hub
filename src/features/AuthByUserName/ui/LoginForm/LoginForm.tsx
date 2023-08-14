import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const changeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const changePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const login = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);
  return (
    <div className={classNames(cls.loginForm, className)}>
      <Text title={t('Auth form')} />
      {error && <Text text={t('Invalid username or password')} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Enter username')}
        autoFocus
        onChange={changeUsername}
        value={username}
      />
      <Input
        type="password"
        className={cls.input}
        placeholder={t('Enter password')}
        onChange={changePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={login}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});
