import { screen, waitFor } from '@testing-library/react';

import { UserRole } from '@/entities/User';
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteProfile,
} from '@/shared/const/route';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { AppRouter } from './AppRouter';

describe('AppRouter.test', () => {
  test('Страница должна отрендериться', () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAbout(),
    });
    waitFor(async () => {
      const page = await screen.findByTestId('AboutPage');
      expect(page).toBeInTheDocument();
    });
  });

  test('Страница не найдена', () => {
    ComponentRender(<AppRouter />, {
      route: '/asdasd',
    });
    waitFor(async () => {
      const page = await screen.findByTestId('NotFoundPage');
      expect(page).toBeInTheDocument();
    });
  });

  test('Редирект неавторизованного пользователя', () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });
    waitFor(async () => {
      const page = await screen.findByTestId('MainPage');
      expect(page).toBeInTheDocument();
    });
  });

  test('Доступ к странице авторизованного пользователя', () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });
    waitFor(async () => {
      const page = await screen.findByTestId('ProfilePage');
      expect(page).toBeInTheDocument();
    });
  });

  test('Доступ запрещен (отсутствует роль)', () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });
    waitFor(async () => {
      const page = await screen.findByTestId('ForbiddenPage');
      expect(page).toBeInTheDocument();
    });
  });

  test('Доступ разрешен (пристутствует роль)', () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            roles: [UserRole.ADMIN],
          },
        },
      },
    });
    waitFor(async () => {
      const page = await screen.findByTestId('AdminPanelPage ');
      expect(page).toBeInTheDocument();
    });
  });
});
