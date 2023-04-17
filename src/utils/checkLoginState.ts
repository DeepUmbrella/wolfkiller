import { ACCESS_TOKEN } from "@constant";
import { checkLogin } from "../api";

const IF_WINDOWS = typeof window !== "undefined";

export const checkLoginState = () => {
  const accessToken = getLocalStorageItem(ACCESS_TOKEN);

  // if (!accessToken) {
  //   throw new Error("");
  // }

  return checkLogin(accessToken);

  // try {
  //   return await checkLogin(accessToken);
  // } catch ({ response }) {
  //   if (response.status === 401) {
  //     clearlocalStorageItem(ACCESS_TOKEN);
  //   }
  //   return {
  //     stateCode: response.status,
  //     data: response.data,
  //   };
  // }
};

export function clearlocalStorageItem(key: string) {
  const value = getLocalStorageItem(key);
  IF_WINDOWS && localStorage.removeItem(key);
  return {
    key,
    value,
  };
}

export function getLocalStorageItem(key: string): string {
  return IF_WINDOWS ? localStorage.getItem(key) ?? "" : "";
}
export function setLocalStorageItem(key: string, value: string) {
  IF_WINDOWS && localStorage.setItem(key, value);
  return {
    key,
    value,
  };
}
