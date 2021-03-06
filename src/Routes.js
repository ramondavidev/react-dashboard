import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import LoadingPage from './components/LoadingPage';
import AuthLayout from './layouts/AuthLayout';
import MenuLayout from './layouts/MenuLayout';

import { historyRef } from './services/history';

const Routes = () => (
  <Suspense fallback={<LoadingPage />}>
    <BrowserRouter ref={historyRef}>
      {renderRoutes([
        {
          path: '/auth',
          component: AuthLayout,
          routes: [
            {
              path: '/auth/login',
              exact: true,
              component: lazy(() => import('./pages/Auth/Login'))
            },

            {
              component: () => <Redirect to="/errors/error-404" />
            }
          ]
        },
        {
          path: '*',
          component: MenuLayout,
          routes: [
            {
              path: '/faturamento',
              exact: true,
              component: lazy(() => import('./pages/Faturamento'))
            },
            {
              path: '/estoque',
              exact: true,
              component: lazy(() => import('./pages/Estoque'))
            },
            {
              path: '/ciclo-operacional',
              exact: true,
              component: lazy(() => import('./pages/CicloOperacional'))
            },
            {
              path: '/:token',
              exact: true,
              component: lazy(() => import('./pages/Home'))
            },
            {
              component: () => <Redirect to="/" />
            }
          ]
        }
      ])}
    </BrowserRouter>
  </Suspense>
);

export default Routes;
