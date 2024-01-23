import { getUserInited, initAuthData } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';

export const App = () => {
  const inited = useSelector(getUserInited);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <div id="app" className={classNames('app_redesigned', {}, [])}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              sidebar={<Sidebar />}
              content={<AppRouter />}
              toolbar={<div>a23123</div>}
            />
          </Suspense>
        </div>
      }
      off={
        <div id="app" className={classNames('app', {}, [])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              {inited && <AppRouter />}
            </div>
          </Suspense>
        </div>
      }
    />
  );
};
