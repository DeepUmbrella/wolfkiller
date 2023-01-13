import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, BrowserRouterProps } from "react-router-dom";
import { Root } from "@template";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
