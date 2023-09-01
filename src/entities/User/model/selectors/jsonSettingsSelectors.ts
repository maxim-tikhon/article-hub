import { State } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const getUserSettings = (state: State) => state.user?.authData?.jsonSettings || defaultJsonSettings;
