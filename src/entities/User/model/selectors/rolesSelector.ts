import { createSelector } from '@reduxjs/toolkit';
import { State } from '@/app/providers/StoreProvider';
import { UserRole } from '../consts/consts';

export const getUserRoles = (state: State) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, roles => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, roles => Boolean(roles?.includes(UserRole.MANAGER)));
