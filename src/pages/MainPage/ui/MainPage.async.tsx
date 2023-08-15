import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore: delay
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
