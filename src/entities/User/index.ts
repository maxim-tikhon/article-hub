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

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/rolesSelector';
