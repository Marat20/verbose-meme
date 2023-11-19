import { BrowserRouter } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { UseTheme } from './providers/ThemeProvider';

export const App = () => {
  const { theme } = UseTheme();

  return (
    <BrowserRouter>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};
