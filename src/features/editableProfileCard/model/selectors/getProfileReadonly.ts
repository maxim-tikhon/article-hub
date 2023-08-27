import { State } from '@/app/providers/StoreProvider';

export const getProfileReadonly = (state: State) => state.profile?.readonly;
