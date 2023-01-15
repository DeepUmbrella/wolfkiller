import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/errorPage";
import { HomePage } from "../pages/homePage";
import { Login } from "@components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
