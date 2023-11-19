import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { UseTheme } from './providers/ThemeProvider/lib/UseTheme';

export const App = () => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <BrowserRouter>
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/'} element={<MainPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
