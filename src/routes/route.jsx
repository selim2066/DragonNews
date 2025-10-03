import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/Home Layout';
import NewsLayout from '../layouts/NewsLayout';
import AuthLayout from '../layouts/auth/AuthLayout';
import Page from '../pages/Page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
      {
        path:"",
        element:<Navigate to={"category/01"}></Navigate>
      },
      {
        path:"category/:id",
        element:<Page/>,
        loader: ({params})=>{return fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)}
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