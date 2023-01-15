import React, { PropsWithChildren, useEffect, useState } from "react";
import router from "../router/router";
import { Request, Login } from "@components";

import "./root.scss";
import { useLogin } from "@hooks";
import { RouterProvider } from "react-router-dom";

//todo @yl all contextProvider render in this component

export const Root: React.FC<PropsWithChildren> = ({ children }) => {
  const [devPassWord, setDevPassword] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("devPassword") ?? "";
    }
  });

  useEffect(() => {
    console.log(devPassWord);
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

  if (devPassWord !== "yl123") {
    if (process.env.NODE_ENV === "development") {
      return (
        <div>
          <Login devPass={setDevPassword}></Login>
        </div>
      );
    }
  }
  return <RouterProvider router={router} />;
};
