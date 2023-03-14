import { useEffect, useState } from "react";
import { createContextFactory } from "./context";
import { useLogin } from "./useLogin";

const useAppPageEffect = () => {
  return {
    login: useLogin(),
  };
};

export const {
  ManagedContextProvider: AppPageContextProvider,
  useContext: useAppPageContext,
  useManagedContextSelector: useAppPageSelector,
} = createContextFactory(useAppPageEffect);
