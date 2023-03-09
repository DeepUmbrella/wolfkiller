import React, { useEffect } from "react";
import { useManagementUser } from "@hooks";
import { ManagementUserList, ManagementUserOption } from "@components";

export const AccountManagementPage = () => {
  const { manager, info } = useManagementUser();

  if (!manager) {
    return (
      <div>
        <h1>No permission!</h1>
        <a href="/">BACK HOME</a>
      </div>
    );
  }
  return (
    <div className="management-section">
      <ManagementUserOption />
      <ManagementUserList />
    </div>
  );
};
