import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { State } from '../config/state';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: State;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
