import { State } from 'app/providers/StoreProvider';

export const getProfileIsLoading = (state: State) => state.profile?.isLoading;
