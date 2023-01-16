import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, AccountPage, Page404 } from "@pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: <Page404 />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
