import "./index.scss";
import React, { PropsWithChildren, useRef } from "react";
import classnames from "classnames";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { WithBadge, WithBadgeProps } from "./WithBadge";
import { UserOptionsProps, WithUserOptions } from "./WithUserOptions";
export type AvatarSizeResponseType = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};
export interface AvatarProps {
  showDropDown?: boolean;
  showMessageBadge?: boolean;
  avatarImgUrl?: string;
  displayMode?: CSSPropertiesWithVar;
  withBadge?: WithBadgeProps["withBadge"];
  withUserOptions?: UserOptionsProps["withUserOptions"];
  avatarShape?: "circle" | "square";
  preFixName?: string;
  size?: number | Partial<AvatarSizeResponseType>;
  className?: string;
}

interface CSSPropertiesWithVar extends React.CSSProperties {
  [key: string | number | symbol]: any;
}

export const UserAvatar: React.FC<PropsWithChildren<AvatarProps>> = ({
  children,
  className = "",
  displayMode = {},
  withBadge,
  withUserOptions = {},
  avatarShape = "square",
  preFixName = "default",
  avatarImgUrl = "",
  size = 44,
}) => {
  const isLogin = true; //todo there need own the user login state
  return (
    <div
      className={classnames(className, `avatar ${preFixName}-avatar`)}
      style={displayMode}
    >
      <WithBadge withBadge={withBadge}>
        <WithUserOptions
          isLogin={isLogin}
          withUserOptions={isLogin ? withUserOptions : isLogin}
        >
          <Avatar
            size={size}
            src={avatarImgUrl}
            className={classnames({
              ["is-login-noimg"]: isLogin && !avatarImgUrl,
              ["is-login"]: isLogin,
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
