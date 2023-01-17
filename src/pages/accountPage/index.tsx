import "./accountPage.scss";
import React, { useState } from "react";
import { Login, Register } from "@components";
import { LoginOutlined } from "@ant-design/icons";

export const AccountPage = () => {
  const [selectSection, setselectSection] = useState(false);

  return (
    <div className="certification ">
      <div className="left-login">
        <div className="top-info">
          <div className="info-tips">
            <span className="text-h1 text-cap">don't have an account yet?</span>
          </div>
          <div className="arrow flex-center">
            <LoginOutlined />
          </div>
        </div>
        <Login />
      </div>

      <div className="switch-group flex-center flex-h">
        <div className={`login-switch  switch-item`}>
          <span className="login-text text-up text">
            <p>log in</p>
          </span>
        </div>

        <div className="creat-account-switch switch-item pass">
          <span className="create-text text-up text">
            <p>create</p>
          </span>
        </div>
      </div>

      <div className="right-register ">
        <Register />
        <div className="top-info">
          <div className="info-tips">
            <span className="text-h1 text-cap">
              Yes I already have an account.{" "}
            </span>
          </div>
          <div className="arrow flex-center">
            <LoginOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};
