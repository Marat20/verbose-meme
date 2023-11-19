import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider';
import './app/styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
