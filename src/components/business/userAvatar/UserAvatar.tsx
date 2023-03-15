import "./index.scss";
import React, { PropsWithChildren, useMemo } from "react";
import classnames from "classnames";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Popover, Space } from "antd";
import { WithBadge, WithBadgeProps } from "./WithBadge";
import { WithUserOptions } from "./WithUserOptions";

export interface AvatarProps {
  showDropDown?: boolean;
  showMessageBadge?: boolean;
  avatarImgUrl?: string;
  displayMode?: CSSPropertiesWithVar;
  withBadge?: WithBadgeProps["withBadge"];
  withUserOptions?: boolean;
  avatarShape?: "circle" | "square";
  preFixName?: string;
  size?: number;
}

interface CSSPropertiesWithVar extends React.CSSProperties {
  [key: string | number | symbol]: any;
}

export const UserAvatar: React.FC<PropsWithChildren<AvatarProps>> = ({
  children,
  displayMode = {},
  withBadge,
  withUserOptions = false,
  avatarShape = "square",
  preFixName = "default",
  avatarImgUrl = "/20220709150824_97667.thumb.1000_0.jpg",
  size = 44,
}) => {
  const isLogin = true; //todo there need own the user login state

  return (
    <div className={`avatar ${preFixName}-avatar`} style={displayMode}>
      <WithBadge withBadge={withBadge}>
        <WithUserOptions withUserOptions={withUserOptions}>
          <Avatar
            size={size}
            src={avatarImgUrl}
            className={classnames({
              ["is-login"]: isLogin && !avatarImgUrl,
            })}
            shape={avatarShape}
            icon={<UserOutlined />}
          >
            {children}
          </Avatar>
        </WithUserOptions>
      </WithBadge>
    </div>
  );
};
