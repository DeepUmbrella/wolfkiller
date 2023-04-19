import { useAppPageSelector } from "@hooks";
import { PropsWithChildren } from "react";

export const GlobalAlert: React.FC<PropsWithChildren> = ({ children }) => {
  const contextHolder = useAppPageSelector((state) => state.globalMessage[1]);
  return (
    <>
      {contextHolder}
      {children}
    </>
  );
};
