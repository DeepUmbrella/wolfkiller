import React from "react";
import ReactDOM from "react-dom/client";

import { Root } from "@template";
console.log(
  "[attention] : in here React 18 will render twice in development model  "
);
ReactDOM.createRoot(document.getElementById("yroot") as HTMLElement).render(
  // <React.StrictMode>
  <Root />
  // </React.StrictMode>
);
