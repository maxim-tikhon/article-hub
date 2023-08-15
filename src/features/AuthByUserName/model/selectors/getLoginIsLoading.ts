import { State } from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state: State) => state?.loginForm?.isLoading || false;
