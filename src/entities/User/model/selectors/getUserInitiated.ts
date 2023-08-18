import { State } from 'app/providers/StoreProvider';

export const getUserInitiated = (state: State) => state.user.initiated;
