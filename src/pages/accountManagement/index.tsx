import React, { useEffect } from "react";

import { ManagementUserList, ManagementUserOption } from "@components";

export const AccountManagementPage = () => {
  const manager = false;

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

export default AccountManagementPage;
