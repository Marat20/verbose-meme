import { Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPageAsync />} />
            <Route path={'/'} element={<MainPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
