import { State } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return error', () => {
    const state: DeepPartial<State> = {
      profile: {
        error: '123',
      },
    };
    expect(getProfileError(state as State)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getProfileError(state as State)).toEqual(undefined);
  });
});
