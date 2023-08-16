import { LoginState } from '../types/loginState';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginState> = { username: '123' };
    expect(loginReducer(
            state as LoginState,
            loginActions.setUsername('123123'),
    )).toEqual({ username: '123123' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginState> = { password: '123' };
    expect(loginReducer(
            state as LoginState,
            loginActions.setPassword('123123'),
    )).toEqual({ password: '123123' });
  });
});
