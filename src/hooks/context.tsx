import React, { useContext } from "react";
import { PropsWithChildren, createContext } from "react";

interface ProviderProps<T> extends PropsWithChildren<unknown> {
  defaultValue?: T;
}

export function createContextFactory<
  Effect extends (...value: any[]) => any,
  DefaultValue = Parameters<Effect>[0]
>(effect: Effect) {
  type Context = ReturnType<Effect>;

  const ContextStore = createContext<Context>({} as Context);

  const ManagedContextProvider: React.FC<ProviderProps<DefaultValue>> = (
    props
  ) => {
    const { children, defaultValue = {} } = props;
    return (
      <ContextStore.Provider value={effect(defaultValue)}>
        {children}
      </ContextStore.Provider>
    );
  };

  function useManagedContextSelector<V>(selecter: (context: Context) => V) {
    const currentContext = useCurrentContext();
    return selecter(currentContext);
  }

  function useCurrentContext(): Context {
    return useContext<Context>(ContextStore);
  }

  return {
    ManagedContextProvider,
    useContext: useCurrentContext,
    useManagedContextSelector,
  };
}
