import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, Page404 } from "@pages";
import { FC } from "react";

interface PageModulesType {
  [key: string | symbol]: { default?: FC<any> };
}

const generateRouter = (): RouteObject[] => {
  const router: RouteObject[] = [];
  const pageModules: PageModulesType = import.meta.glob("../pages/**/*.tsx", {
    eager: true,
  });
  Object.entries(pageModules).map(([path, pageModule]) => {
    const Component = pageModule?.default || HomePage;
    router.push({
      path:
        path.replace("../pages", "").replace("/index.tsx", "").toLowerCase() ||
        "/",
      element: <Component context={{ time: "166999" }} />,
      errorElement: <ErrorPage />,
    });
  });
  console.log(router, "router");
  return router;
};
const router = createBrowserRouter([
  ...generateRouter(),
  {
    path: "/*",
    element: <Page404 />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
