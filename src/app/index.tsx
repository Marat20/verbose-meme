import 'app/styles/index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { App } from './App';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { StoreProvider } from './providers/StoreProvider';
import { ThemeProvider } from './providers/ThemeProvider/ui/ThemeProvider';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode> 
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
);
