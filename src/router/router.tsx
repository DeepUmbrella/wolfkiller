import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, Page404 } from "@pages";
import { FC } from "react";

interface PageModulesType {
  [key: string | symbol]: { default?: FC<any> };
}
/**
 * resolve path to url daynamic
 * @param  path  the router path
 * @param  option option for include root path default root:true
 * @param  reg default reg math [...] market
 */
const resolvePathToRouter = (
  path: string,
  option = {
    root: true,
  },
  reg = /\[([a-zA-Z0-9_]+)\]/
) => {
  if (typeof path !== "string") return "";
  let routePath =
    path
      .replaceAll(" ", "")
      .replace("../pages", "")
      .replace("/index.tsx", "")
      .toLowerCase()
      .replace("-", "/") || "/";

  const daynamicPart = routePath.match(reg);

  if (daynamicPart) {
    routePath = routePath.replaceAll(
      daynamicPart?.[0],
      `/:${daynamicPart?.[1]}`
    );
  }
  return { path: routePath };
};

const generateRouter = (): RouteObject[] => {
  const router: RouteObject[] = [];
  const pageModules: PageModulesType = import.meta.glob("../pages/**/*.tsx", {
    eager: true,
  });
  Object.entries(pageModules).map(([path, pageModule]) => {
    const Component = pageModule?.default || HomePage;

    router.push({
      element: <Component context={{ time: "166999" }} />,
      errorElement: <ErrorPage />,
      ...resolvePathToRouter(path),
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
