import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from './providers/ThemeProvider/ui/ThemeProvider';
import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
