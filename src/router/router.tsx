import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, Page404 } from "@pages";

import * as page from "@pages";
import React from "react";

const generateRouter = (page: {
  [x: string]: React.FC<React.ComponentProps<any>>;
}): RouteObject[] => {
  const PageName = Object.keys(page);
  const router: any[] = [];
  PageName.map((name: string) => {
    const Component = page[name];
    router.push({
      path: "/" + name.replace("Page", "").toLowerCase(),
      element: <Component context={{ time: "166999" }} />,
      errorElement: <ErrorPage />,
    });
  });
  return router;
};
console.log(123456);
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  ...generateRouter(page),
  {
    path: "/*",
    element: <Page404 />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
