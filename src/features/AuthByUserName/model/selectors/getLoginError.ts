import { State } from 'app/providers/StoreProvider';

export const getLoginError = (state: State) => state?.loginForm?.error;
