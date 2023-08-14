import { State } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: State) => state.user.authData;
