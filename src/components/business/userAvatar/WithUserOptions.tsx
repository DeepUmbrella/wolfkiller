import React, { PropsWithChildren, RefObject, useMemo, useRef } from "react";
import { Button, Tooltip, TooltipProps } from "antd";

export interface UserOptionsProps {
  withUserOptions: TooltipProps | null;
  isLogin?: boolean;
}

export const WithUserOptions: React.FC<PropsWithChildren<UserOptionsProps>> = ({
  children,
  withUserOptions = null,
  isLogin = false,
}) => {
  // const userOptions = useUserOptions();

  const userOptions = [{ title: "userinfo", url: "/account/1" }];
  const parentContainer = useRef<HTMLDivElement>(null);
  // todo there is get user info
  const ToolTipsContent = useMemo(() => {
    return isLogin ? (
      <>
        <Button className="option-item" href={"/account/setting"}>
          PERSONAL SETTING
        </Button>
        {userOptions.map(({ title, url }) => (
          <Button className="option-item" key={title} type="primary">
            {title.toUpperCase()}
          </Button>
        ))}
      </>
    ) : (
      <>
        <Button className="option-item" href={"/account?login"}>
          LOG IN
        </Button>
        <Button className="option-item" href={"/account?create"}>
          CREATE NEW ACCOUNT
        </Button>
      </>
    );
  }, [userOptions, isLogin]);

  if (isLogin && !withUserOptions) {
    return <>{children}</>;
  }
  return (
    <div ref={parentContainer}>
      <Tooltip
        {...withUserOptions}
        title={ToolTipsContent}
        showArrow={false}
        overlayClassName="user-option-setting"
        getTooltipContainer={(t) => parentContainer.current as HTMLElement}
      >
        {children}
      </Tooltip>
    </div>
  );
};
