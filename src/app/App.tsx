import { BrowserRouter } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { UseTheme } from './providers/ThemeProvider/lib/UseTheme';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <BrowserRouter>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <button onClick={toggleTheme}>TOGGLE</button>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};
