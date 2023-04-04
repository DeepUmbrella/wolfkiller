import { useEffect, useState } from "react";
import { checkLoginState } from "@utils";
export interface LoginStateType {}
export const useLogin = () => {
  const [loginState, setLoginState] = useState({});

  useEffect(() => {
    checkLoginState().then((data) => {
      setLoginState(data);
    });
  }, []);

  return [loginState, setLoginState] as const;
};
