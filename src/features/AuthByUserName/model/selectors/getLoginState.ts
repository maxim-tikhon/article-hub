import { State } from 'app/providers/StoreProvider';

export const getLoginState = (state: State) => state?.loginForm;
