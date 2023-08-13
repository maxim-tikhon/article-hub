import { CounterState } from 'entities/Counter';
import { UserState } from 'entities/User';

export interface State {
  counter: CounterState;
  user: UserState;
}
