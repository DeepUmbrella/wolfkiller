import "./login.scss";

import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

type LoginProos = {
  devPass?: (password: string) => void;
};

type formValueType = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export const Login: React.FC<LoginProos> = ({ devPass = () => void 0 }) => {
  const onFinish = (values: formValueType) => {
    console.log("Received values of form: ", values);
    if (values?.username === "dev") {
      devPass(values?.password ?? "");
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        validateStatus="error"
        name="username"
        hasFeedback
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        validateStatus="success"
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item
          hasFeedback
          validateStatus="error"
          name="rememberMe"
          valuePropName="checked"
          noStyle
        >
          <Checkbox className="remember-label">Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <div className="switch-group flex-center flex-h">
        <div className={`login-switch  switch-item pass`}>
          <span className="login-text text-up text">
            <p>log in</p>
          </span>
        </div>
      </div>
    </Form>
  );
};
