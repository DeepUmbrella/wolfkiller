import React, { PropsWithChildren } from "react";
import { Badge } from "antd";
export interface WithBadgeProps {
  withBadge?: {
    count?: number;
    dot?: boolean;
  };
}

export const WithBadge: React.FC<PropsWithChildren<WithBadgeProps>> = ({
  children,
  withBadge,
  ...props
}) => {
  if (withBadge) {
    return (
      <Badge {...withBadge} {...props}>
        {children}
      </Badge>
    );
  }
  return <>{children}</>;
};
