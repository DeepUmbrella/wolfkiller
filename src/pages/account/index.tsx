import "./accountPage.scss";
import React, { useState } from "react";
import { Login, Register } from "@components";
import { LoginOutlined } from "@ant-design/icons";
import classNames from "classnames";

export const AccountPage = () => {
  const [selectSection, setSelectSection] = useState(true);

  return (
    <div
      className={classNames("account-page", {
        ["now-login"]: selectSection,
        ["now-create"]: !selectSection,
      })}
    >
      <div className="account-container">
        <div className="left-info"></div>
        <div className="right-option"></div>
      </div>
    </div>
  );
};

export default AccountPage;
