import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { App } from './App';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { ThemeProvider } from './providers/ThemeProvider/ui/ThemeProvider';
import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
