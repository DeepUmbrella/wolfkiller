import "./login.scss";

import React, { useEffect, useMemo, useState } from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { validationEmailOrUserName } from "@utils";
import { useAppPageSelector } from "@hooks";

type LoginProps = {
  initialValues?: Partial<FormValueType>;
};

type FormValueType = {
  username: string;
  password: string;
  remember: boolean;
  agreeUs: boolean;
};

export const Login: React.FC<LoginProps> = ({ initialValues }) => {
  const navigateTo = useNavigate();

  const loginState = useAppPageSelector((state) => state.login[0]);
  const [form] = Form.useForm();
  const [firstSubmit, setFirstSubmit] = useState(true);

  useEffect(() => {
    console.log(loginState, "loginState");
    if (loginState?.data?.login) {
      navigateTo("/");
    }
  }, [loginState]);

  const validateTrigger = useMemo(() => {
    if (firstSubmit) {
      return ["onSubmit"];
    }
    return ["onChange", "onSubmit"];
  }, [firstSubmit]);

  const requestResult = (data: FormValueType) => {
    console.log("正在登陆");
  };

  const onFinish = (values: FormValueType) => {
    // validationFormdata
    console.log("Received values of form: ", values);

    // validationFail  do something

    // if success send request

    requestResult();
  };

  const onFinishFailed = ({ values, errorFields, outOfDate }: any) => {
    setFirstSubmit(false);
  };

  const clearForm = () => {
    form.resetFields(["username", "password"]);
  };

  return (
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={initialValues}
      onFinish={onFinish}
      validateTrigger={validateTrigger}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your Username Or Email!",
          },
          {
            min: 4,
            max: 20,
            message: "Username Or Email Lenght Must be 4-20 !",
          },
          () => {
            return {
              validator: validationEmailOrUserName,
            };
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username Or Email"
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item className="remember-forgot">
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className="remember-label">Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/account/forgot">
          Forgot password?
        </Link>
      </Form.Item>

      <Form.Item name="agree" valuePropName="checked" className="argee">
        <Checkbox className="agree-check"></Checkbox>

        <Link className="login-form-agree" to="/account/agree">
          Please read and agree to this agreement carefully.
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          SIGN IN
        </Button>
        <Button
          type="primary"
          danger
          className="login-rest-button"
          onClick={clearForm}
        >
          RESET
        </Button>
      </Form.Item>
    </Form>
  );
};
