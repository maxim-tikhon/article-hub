import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StateKey, ReduxStoreWithManager, State } from '@/app/providers/StoreProvider';

export type ReducersList = {
  // [stateKey in StateKey]?: Reducer;
  [stateKey in StateKey]?: Reducer<NonNullable<State[stateKey]>>;
}

export const useDynamicReducurLoad = (reducerList: ReducersList, removeAfterUnmount: boolean = true) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducerList).forEach(([stateKey, reducer]) => {
      const mounted = mountedReducers[stateKey as StateKey];

      if (!mounted) {
        store.reducerManager.add(stateKey as StateKey, reducer);
        dispatch({ type: `@INIT ${stateKey} reducer` });
      }
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
