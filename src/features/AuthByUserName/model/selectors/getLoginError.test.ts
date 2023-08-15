import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<State> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginError(state as State)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getLoginError(state as State)).toEqual(undefined);
  });
});
