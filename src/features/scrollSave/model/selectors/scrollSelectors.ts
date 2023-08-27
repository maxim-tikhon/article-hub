import { createSelector } from '@reduxjs/toolkit';
import { State } from '@/app/providers/StoreProvider';

export const getScrollRecord = (state: State) => state.scroll.scrollRecord;

export const getScrollPositionByPath = createSelector(
  getScrollRecord,
  (state: State, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
