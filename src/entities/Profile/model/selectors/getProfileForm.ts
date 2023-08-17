import { State } from 'app/providers/StoreProvider';

export const getProfileForm = (state: State) => state.profile?.form;
