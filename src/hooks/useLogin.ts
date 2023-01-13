import { useEffect, useState } from "react";
import { checkLoginState } from "../utils";

export const useLogin = () => {
  const [loginState, setLoginState] = useState(() => {
    const data = checkLoginState();

    console.log(data, "data");

    return true;
  });

  return [loginState, setLoginState];
};
