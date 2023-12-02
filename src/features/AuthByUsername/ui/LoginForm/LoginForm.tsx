import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../modal/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../modal/services/loginByUsername/loginByUsername';
import { loginActions } from '../../modal/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Login form')} />
      {error && (
        <Text text={t('Wrong login or password')} theme={TextTheme.ERROR} />
      )}
      <Input
        placeholder={t('Enter username')}
        type='text'
        className={cls.input}
        autoFocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Enter password')}
        type='text'
        className={cls.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
        className={cls.loginBtn}>
        {t('Login')}
      </Button>
    </div>
  );
});
