import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home-page';
import Users from '../pages/users/Users';
import UserDetail from '../pages/user-detail/UserDetail';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/users',
    children: [
      { index: true, element: <Users /> },
      {
        path: '/users/:userId',
        element: <UserDetail />
      }
    ]
  }
]);

export { routers };
