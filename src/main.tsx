import React from "react";
import ReactDOM from "react-dom/client";

import { Root } from "@template";

ReactDOM.createRoot(document.getElementById("yroot") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
