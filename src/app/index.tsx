import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { StoreProvider } from './providers/StoreProvider';
import { ThemeProvider } from './providers/ThemeProvider/ui/ThemeProvider';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Контейнер root не найден');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ForceUpdateProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ForceUpdateProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);
