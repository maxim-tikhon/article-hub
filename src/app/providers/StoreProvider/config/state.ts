import { CounterState } from 'entities/Counter';
import { UserState } from 'entities/User';
import { LoginState } from 'features/AuthByUserName';

export interface State {
  counter: CounterState;
  user: UserState;
  loginForm?: LoginState;
}
