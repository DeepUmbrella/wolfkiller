import { useEffect, useState } from "react";
import { checkLoginState } from "@utils";
import { useQuery } from "react-query";
export interface LoginStateType {}

export const useLogin = () => {
  console.log("run login hook");

  const [loginState, setLoginState] = useState({});
  const queryResponse = useQuery(["checkLogin"], checkLoginState, {
    retry: false,
  });

  const { data } = queryResponse;
  useEffect(() => {
    console.log(queryResponse, 12323);
    setLoginState(data);
  }, [queryResponse]);

  return [loginState, setLoginState] as const;
};
