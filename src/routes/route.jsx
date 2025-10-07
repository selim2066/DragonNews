import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/Home Layout";
import NewsLayout from "../layouts/NewsLayout";
import AuthLayout from "../layouts/auth/AuthLayout";
import Page from "../pages/Page";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <Page />,
        loader: ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          );
        },
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoutes>
        <NewsDetails></NewsDetails>
      </PrivateRoutes>
    ),
    loader: ({ params }) => {
      return fetch(
        ` https://openapi.programming-hero.com/api/news/${params.id}`
      );
    },
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <h2>Error</h2>,
  },
]);

export default router;
