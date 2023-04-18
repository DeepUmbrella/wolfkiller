import { createContextFactory } from "./context";
import { useLoading } from "./useLoading";
import { useUser } from "./useUser";

const useAppPageEffect = () => {
  return {
    loading: useLoading(),
    user: useUser(),
  };
};

export const {
  ManagedContextProvider: AppPageContextProvider,
  useContext: useAppPageContext,
  useManagedContextSelector: useAppPageSelector,
} = createContextFactory(useAppPageEffect);
