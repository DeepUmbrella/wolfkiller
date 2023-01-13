import React from "react";
import { Request, Login } from "@components";

import "./root.scss";
import { useLogin } from "@hooks";

export const Root = () => {
  // const loginState = useLogin()[0];

  // console.log(loginState, "loginState");

  if (process.env.NODE_ENV === "development") {
    console.log(123);
    return (
      <div>
        <Login></Login>
      </div>
    );
  }
  return (
    <div id="wolf-root">
      <button> </button>
    </div>
  );
};
