import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // delay
  setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
