import "./sign.scss";
import React, { useEffect, useState } from "react";
import { Login, Register } from "@components";
import classNames from "classnames";
import { Link, useNavigate, useParams } from "react-router-dom";

export const SignPage: React.FC<{}> = (props) => {
  const { id: signTabName } = useParams();
  const navigateTo = useNavigate();

  const [isSignup, setSignup] = useState(() => {
    return signTabName === "up";
  });

  useEffect(() => {
    if (!["in", "up"].includes(signTabName ?? "")) {
      return navigateTo("/404");
    }
  }, []);

  useEffect(() => {
    setSignup(signTabName === "up");
  }, [signTabName]);

  return (
    <div
      className={classNames("account-page", {
        ["sgin-up"]: isSignup,
        ["sgin-in"]: !isSignup,
      })}
    >
      <div className="account-container">
        <div className="left-info">
          <span className="left-info-logo">
            {isSignup ? "SGIN UP" : "SGIN IN"}
          </span>
          <h2 className="left-info-message">
            To discover more, the world is at your feet.
          </h2>
        </div>
        <div className="right-option">
          <div className="option-message">
            {isSignup ? (
              <p className="option-message-account">
                <span>Alreadly Have an Accout ?</span>{" "}
                <Link to="/account/sign/in">Sgin In Now! </Link>
              </p>
            ) : (
              <p className="option-message-account">
                <span>Not Have an Accout Yet ?</span>{" "}
                <Link to="/account/sign/up">Sgin Up Now! </Link>
              </p>
            )}
          </div>
          <div className="option-form">
            {isSignup ? (
              <Register></Register>
            ) : (
              <Login initialValues={{ remember: true }}></Login>
            )}
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

export default SignPage;
