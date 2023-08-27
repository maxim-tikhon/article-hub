import { State } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<State> = {
      loginForm: {
        password: '123123',
      },
    };
    expect(getLoginPassword(state as State)).toEqual('123123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getLoginPassword(state as State)).toEqual('');
  });
});
