import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore: delay
  setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
