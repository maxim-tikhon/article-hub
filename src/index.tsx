import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from 'widgets/PageError/PageError';
import App from './app/App';
import './shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<PageError />}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
