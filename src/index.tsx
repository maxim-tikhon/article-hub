import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { PageError } from '@/widgets/PageError';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App';
import './shared/config/i18n/i18n';
import '@/app/styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(

  <ErrorBoundary fallback={<PageError />}>
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </ErrorBoundary>,

);
