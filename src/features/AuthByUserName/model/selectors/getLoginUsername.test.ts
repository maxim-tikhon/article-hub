import { State } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<State> = {
      loginForm: {
        username: '123123',
      },
    };
    expect(getLoginUsername(state as State)).toEqual('123123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getLoginUsername(state as State)).toEqual('');
  });
});
