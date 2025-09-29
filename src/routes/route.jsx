import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/Home Layout';
import NewsLayout from '../layouts/NewsLayout';
import AuthLayout from '../layouts/auth/AuthLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
      {
        path:"",
        element:<Navigate to={``}></Navigate>
      }
    ]
  },
  {
    path: "/news",
    element: <NewsLayout/>
  },
  {
    path:"/auth",
    element: <AuthLayout/>
  },
  {
    path:"*",
    element:<h2>Error</h2>
  }
]);

export default router;