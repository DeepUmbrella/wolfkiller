import { checkLogin } from "../api";

export const checkLoginState = async () => {
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("_auth") ?? "";
  }
  const checkLoginResults = await checkLogin(token);
  return { state: true };
};
