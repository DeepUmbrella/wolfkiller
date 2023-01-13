import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/errorPage";
import { Root } from "@template";
import { Login } from "@components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
