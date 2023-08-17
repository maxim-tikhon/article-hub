import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateKey } from 'app/providers/StoreProvider/config/state';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [stateKey in StateKey]?: Reducer;
}

export const useDynamicReducurLoad = (reducerList: ReducersList, removeAfterUnmount: boolean = true) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducerList).forEach(([stateKey, reducer]) => {
      store.reducerManager.add(stateKey as StateKey, reducer);
      dispatch({ type: `@INIT ${stateKey} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducerList).forEach(([stateKey, reducer]) => {
          store.reducerManager.remove(stateKey as StateKey);
          dispatch({ type: `@DESTROY ${stateKey} reducer` });
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};