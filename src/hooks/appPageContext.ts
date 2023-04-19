import { useState } from "react";
import { createContextFactory } from "./context";
import { useLoading } from "./useLoading";
import { useUser } from "./useUser";
import { MessageInstance } from "antd/es/message/interface";
import { message } from "antd";

const useAppPageEffect = () => {
  return {
    loading: useLoading(),
    user: useUser(),
    globalMessage: message.useMessage(),
  };
};

export const {
  ManagedContextProvider: AppPageContextProvider,
  useContext: useAppPageContext,
  useManagedContextSelector: useAppPageSelector,
} = createContextFactory(useAppPageEffect);
