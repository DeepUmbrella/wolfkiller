import "./root.scss";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "../router/router";
import { AppPageContextProvider } from "@hooks";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { FullPageLoading } from "@components";

//todo @yl all contextProvider render in this component

const queryClient = new QueryClient();

export const Root: React.FC<PropsWithChildren> = ({ children }) => {
  const [devPassWord, setDevPassword] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("devPassword") ?? "";
    }
  });

  useEffect(() => {
    const windowSizeHandler = () => {
      document.body.setAttribute("style", `--windSize:${window.innerHeight}px`);
    };
    if (typeof window !== "undefined") {
      windowSizeHandler();
      window.addEventListener("resize", windowSizeHandler);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", windowSizeHandler);
      }
    };
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (devPassWord == "yl123") {
        window.localStorage.setItem("devPassword", "yl123");
      } else {
        window.localStorage.removeItem("devPassword");
      }
    }
  }, [devPassWord]);
  // const loginState = useLogin()[0];

  // console.log(loginState, "loginState");

  // if (devPassWord !== "yl123") {
  //   if (process.env.NODE_ENV === "development") {
  //     return (
  //       <div>
  //         <Login devPass={setDevPassword}></Login>
  //       </div>
  //     );
  //   }
  // }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppPageContextProvider>
          <FullPageLoading>
            <RouterProvider router={router} />
          </FullPageLoading>
        </AppPageContextProvider>
      </QueryClientProvider>
    </>
  );
};
