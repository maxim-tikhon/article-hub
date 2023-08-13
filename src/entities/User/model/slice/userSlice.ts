import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../types/user';

const initialState: UserState = {
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
