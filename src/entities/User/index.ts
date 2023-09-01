export {
  userReducer,
  userActions,
} from './model/slice/userSlice';

export type {
  UserState,
  User,
} from './model/types/user';
export { UserRole } from './model/consts/consts';

export {
  getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';

export {
  getUserInitiated,
} from './model/selectors/getUserInitiated';

export {
  getUserSettings,
} from './model/selectors/jsonSettingsSelectors';

export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';
export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/rolesSelector';
