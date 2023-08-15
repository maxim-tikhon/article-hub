import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateKey } from 'app/providers/StoreProvider/config/state';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export const useDynamicReducurLoad = (stateKey: StateKey, reducer: Reducer, removeAfterUnmount: boolean = true) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add('loginForm', reducer);
    dispatch({ type: `@INIT ${stateKey} reducer` });

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove('loginForm');
        dispatch({ type: `@DESTROY ${stateKey} reducer` });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
