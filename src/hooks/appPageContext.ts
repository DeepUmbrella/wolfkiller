import { createContextFactory } from "./context";
import { useLoading } from "./useLoading";
import { useLogin } from "./useLogin";

const useAppPageEffect = () => {
  return {
    login: useLogin(),
    loading: useLoading(),
  };
};

export const {
  ManagedContextProvider: AppPageContextProvider,
  useContext: useAppPageContext,
  useManagedContextSelector: useAppPageSelector,
} = createContextFactory(useAppPageEffect);
