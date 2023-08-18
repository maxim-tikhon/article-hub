export interface User {
  id: string;
  username: string;
}

export interface UserState {
  authData?: User;
  initiated: boolean;
}
