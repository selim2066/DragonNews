import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/Home Layout';
import NewsLayout from '../layouts/NewsLayout';
import AuthLayout from '../layouts/auth/AuthLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
  },
  {
    path: "/news",
    element: <NewsLayout/>
  },
  {
    path:"/auth",
    element: <AuthLayout/>
  }
]);

export default router;