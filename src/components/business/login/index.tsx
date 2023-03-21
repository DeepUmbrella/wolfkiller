import "./login.scss";

import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

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
        name="username"
        validateStatus="success"
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
        validateStatus="error"
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item className="remember-forgot">
        <Form.Item
          hasFeedback
          name="rememberMe"
          valuePropName="checked"
          noStyle
        >
          <Checkbox className="remember-label">Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/account/forgot">
          Forgot password?
        </Link>
      </Form.Item>

      <Form.Item
        hasFeedback
        name="agree"
        valuePropName="checked"
        className="argee"
      >
        <Checkbox className="agree-check">
          <Link className="login-form-agree" to="/account/agree">
            Please read and agree to this agreement carefully.
          </Link>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          SIGN IN
        </Button>
        <Button type="primary" danger className="login-rest-button">
          RESET
        </Button>
      </Form.Item>
    </Form>
  );
};
