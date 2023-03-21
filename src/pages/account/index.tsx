import "./accountPage.scss";
import React, { useState } from "react";
import { Login, Register } from "@components";
import { LoginOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";

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
        <div className="left-info">
          <span className="left-info-logo">SGIN IN</span>
          <h2 className="left-info-message">
            To discover more, the world is at your feet.
          </h2>
        </div>
        <div className="right-option">
          <div className="option-message">
            <p className="option-message-account">
              <span>Not Have an Accout?</span>{" "}
              <Link to="/account/create">Sgin Up New! </Link>
            </p>
          </div>
          <div className="option-form">
            <Login initialValues={{ remember: true }}></Login>
          </div>
          <div className="other-information">
            <span className="information-detile">
              If you have any needs, you can send an{" "}
              <Link to={"/report/email"} target="_blank">
                Email
              </Link>{" "}
              or to the <Link to={"/help/cantactus"}>Help Center</Link> tell us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
