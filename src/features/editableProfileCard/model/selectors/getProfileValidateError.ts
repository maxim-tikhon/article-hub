import { State } from '@/app/providers/StoreProvider';

export const getProfileValidateErrors = (state: State) => state.profile?.validateErrors;
