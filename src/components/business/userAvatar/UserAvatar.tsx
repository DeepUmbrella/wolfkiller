import "./index.scss";
import React, { PropsWithChildren, useRef } from "react";
import classnames from "classnames";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { WithBadge, WithBadgeProps } from "./WithBadge";
import { UserOptionsProps, WithUserOptions } from "./WithUserOptions";
import { useAppPageSelector } from "@hooks";
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

  size = 44,
}) => {
  const userData = useAppPageSelector((state) => state.user[0]);
  const { user_name = "", avatar_url = "" } = userData ?? {};
  const isLogin = !!user_name; //todo there need own the user login state
  return (
    <div
      className={classnames(className, `avatar ${preFixName}-avatar`)}
      style={displayMode}
    >
      <WithBadge withBadge={withBadge}>
        <WithUserOptions isLogin={isLogin} withUserOptions={withUserOptions}>
          <Avatar
            size={size}
            src={avatar_url}
            className={classnames({
              ["is-login-noimg"]: isLogin && !avatar_url,
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
