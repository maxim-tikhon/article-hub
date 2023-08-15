import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<State> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as State)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getLoginIsLoading(state as State)).toEqual(false);
  });
});
