import { State } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<State> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as State)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<State> = {};
    expect(getProfileReadonly(state as State)).toEqual(undefined);
  });
});
