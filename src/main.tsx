import React from "react";
import ReactDOM from "react-dom/client";

import { Root } from "@template";

ReactDOM.createRoot(document.querySelector("body") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
