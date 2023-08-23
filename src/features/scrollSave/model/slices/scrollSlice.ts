import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollState } from '../types/scrollState';

const initialState: ScrollState = {
  scrollRecord: {},
};

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scrollRecord[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
