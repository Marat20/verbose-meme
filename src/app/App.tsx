import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { UseTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = UseTheme();
  const [isOpen, setIsOped] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />

        <button onClick={() =>  setIsOped(true)}>tog</button>
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
