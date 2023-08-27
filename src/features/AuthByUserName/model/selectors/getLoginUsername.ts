import { State } from '@/app/providers/StoreProvider';

export const getLoginUsername = (state: State) => state?.loginForm?.username || '';
