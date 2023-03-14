import { ACCESS_TOKEN } from "@constant";
import { checkLogin } from "../api";

const IF_WINDOWS = typeof window !== "undefined";

export const checkLoginState = async () => {
  let resultData = {};
  const accessToken = getLocalStorageItem(ACCESS_TOKEN);

  if (!accessToken) {
    return {
      data: {
        login: false,
      },
    };
  }
  await checkLogin(accessToken).then(
    (data) => {
      resultData = {
        stateCode: data.status,
        data: data.data,
      };
    },
    (err) => {
      const { response } = err;
      if (response.status === 401) {
        clearlocalStorageItem(ACCESS_TOKEN);
      }

      resultData = {
        stateCode: response.status,
        data: response.data,
      };
    }
  );

  return resultData;
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
