import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { State, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<State>) => (Story: StoryFn) => (
  <StoreProvider initialState={state as State}>
    <Story />
  </StoreProvider>
);
