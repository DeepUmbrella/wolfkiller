import React, { PropsWithChildren, useMemo } from "react";
import { Button, Popover, Tooltip } from "antd";

export interface UserOptionsProps {
  withUserOptions?: boolean;
}

export const WithUserOptions: React.FC<PropsWithChildren<UserOptionsProps>> = ({
  children,
  withUserOptions = false,
}) => {
  // const userOptions = useUserOptions();

  const userOptions = [{ title: "userinfo", url: "/account/1" }];

  // todo there is get user info
  const ToolTipsContent = useMemo(() => {
    return (
      <div>
        {userOptions.map(({ title, url }) => (
          <Button key={title} type="primary">
            {title}
          </Button>
        ))}
      </div>
    );
  }, [userOptions]);
  console.log(123);
  if (!withUserOptions) {
    return <>{children}</>;
  }
  return (
    <Tooltip title={ToolTipsContent} showArrow={false}>
      {children}
    </Tooltip>
  );
};
