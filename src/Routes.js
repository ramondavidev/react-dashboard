import React, { lazy } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import AuthLayout from './layouts/AuthLayout';
import MenuLayout from './layouts/MenuLayout';

import { historyRef } from './services/history';

const Routes = () => (
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
            path: '/',
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
);

export default Routes;
