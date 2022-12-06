import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import { FullPageLoading } from "@components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<FullPageLoading />} />
  </React.StrictMode>
);
