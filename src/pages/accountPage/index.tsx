import "./accountPage.scss";
import React, { useState } from "react";
import { Login, Register } from "@components";

export const AccountPage = () => {
  const [play, setPlay] = useState(true);

  return (
    <div className="certification">
      <div className="switch-group">
        <div
          className={`login-switch  switch-item ${play ? "" : "pause"}  `}
          onMouseEnter={() => setPlay(false)}
          onMouseLeave={() => setPlay(true)}
        >
          <span className="login-text text-up text">
            <p>log in</p>
          </span>
        </div>
        <div className="creat-account-switch switch-item">
          <span className="create-text text-up text">
            <p>create</p>
          </span>
        </div>
      </div>

      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
};
