import React from "react";
export type ManagementUser = {
  manager: boolean;
  info: any | null;
};
export const useManagementUser = (): ManagementUser => {
  return {
    manager: true,
    info: {
      level: 1,
    },
  };
};
