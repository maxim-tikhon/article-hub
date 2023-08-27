import { State } from '@/app/providers/StoreProvider';

export const getProfileError = (state: State) => state.profile?.error;
