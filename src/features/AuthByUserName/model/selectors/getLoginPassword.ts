import { State } from '@/app/providers/StoreProvider';

export const getLoginPassword = (state: State) => state?.loginForm?.password || '';
