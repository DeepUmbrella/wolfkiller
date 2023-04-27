import { createPortal } from "react-dom";
import "./FullPageLoading.scss";

import React, { PropsWithChildren } from "react";
import { useAppPageSelector } from "@hooks";
import classNames from "classnames";
import { Spin } from "antd";

const FullPageLoading: React.FC<PropsWithChildren> = ({ children }) => {
  const loading = useAppPageSelector((state) => state.loading[0]);

  return (
    <>
      {children}
      {createPortal(
        <div
          className={classNames("full-page-loading", {
            loading,
          })}
        >
          <Spin
            spinning={loading}
            delay={500}
            size="large"
            className="full-page-spining"
          />
        </div>,
        document.body
      )}
    </>
  );
};

export { FullPageLoading };
