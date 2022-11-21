import React, { ChangeEvent, ChangeEventHandler, useMemo, useRef, useState } from "react";
import "./request.scss";
import axios, { AxiosResponse, AxiosStatic } from "axios";

axios.defaults.withCredentials = true;

export const Request = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");
  const [url, setUrl] = useState("");

  const [response, setResponse] = useState("");

  const baseCodeUrl = useRef("/api/user/captcha");

  const [codeUrl, setCodeUrl] = useState("/api/user/captcha");

  const [needsValidate, setNeedsValidate] = useState("");

  const hangdleUser = (e: ChangeEvent) => {
    setUser(e.target.value);
  };

  const hangdlePassword = (e: ChangeEvent) => {
    setPassword(e.target.value);
  };
  const hangdleValidate = (e: ChangeEvent) => {
    setValidate(e.target.value);
  };
  const handleUrl = (e: ChangeEvent) => {
    setUrl(e.target.value);
  };

  const handleRequestFail = (data: { validateUrl?: string }) => {
    if (data?.validateUrl) {
      setNeedsValidate(data?.validateUrl);
    }
  };
  const handleSubmit = async (method: "get" | "post", url: string, data?: any) => {
    const res = axios[method](url, data)
      .then((response: AxiosResponse<{ validateUrl: string }>) => {
        if (response.data?.validateUrl) {
          handleRequestFail(response.data);
        }
        setResponse(JSON.stringify(response.data));
      })
      .catch((err) => {
        setResponse(JSON.stringify(err));
      });
  };

  const data = useMemo(() => {
    return {
      user,
      password,
      validate,
    };
  }, [user, password, validate]);
  return (
    <div className="demo-container">
      <div className="login-demo">
        <div className="url">
          <label htmlFor="req-url" className="url-text">
            Request Url :
          </label>
          <input type="tel" name="url" id="req-url" value={url} onChange={handleUrl} />
        </div>
        <div className="user">
          <input type="text" value={user} onChange={hangdleUser} />
        </div>
        <div className="password">
          <input
            type="text"
            name="password"
            id="userpassword"
            value={password}
            onChange={hangdlePassword}
          />
        </div>
        {
          <div className="validate">
            <input type="text" value={validate} onChange={hangdleValidate} />
            <img
              src={codeUrl}
              onClick={() => setCodeUrl(baseCodeUrl.current + "?" + new Date().getTime())}
              alt="validate-image"
            />
          </div>
        }
        <div className="submit">
          <button type="submit" className="req-get" onClick={() => handleSubmit("get", url)}>
            Get
          </button>
          <button
            type="submit"
            className="req-post"
            onClick={() => handleSubmit("post", url, data)}
          >
            Post
          </button>
        </div>
      </div>
      <div className="res-demo">
        <textarea name="" id="" value={response}></textarea>
      </div>
    </div>
  );
};
