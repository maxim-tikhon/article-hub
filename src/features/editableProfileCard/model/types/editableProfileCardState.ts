import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileState {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    form?: Profile;
    validateErrors?: ValidateProfileError[];
}
