import { State } from '@/app/providers/StoreProvider';

export const getProfileData = (state: State) => state.profile?.data;
