import "./login.scss";

import React, { useEffect, useMemo, useState } from "react";
import { Mutation, useMutation, useQuery } from "react-query";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row, Statistic } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { validationEmailOrUserNameRegExp } from "@utils";
import { useAppPageSelector } from "@hooks";
import { login } from "@api";
import { LoginForm } from "@vtypes";

type LoginProps = {
  initialValues?: Partial<LoginForm>;
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 0,
    },
  },
};

export const Login: React.FC<LoginProps> = ({ initialValues }) => {
  const navigateTo = useNavigate();
  const [switchAccount, setSwitchAccount] = useState(false);
  const [user, setUser] = useAppPageSelector((state) => state.user);
  const user_name = user?.user_name;
  const [form] = Form.useForm();
  const [firstSubmit, setFirstSubmit] = useState(true);
  const { mutateAsync, isLoading } = useMutation("login", login, {
    retry: false,
    onSuccess: (data, varibles, context) => {
      setUser(data.data?.user_info);
      setSwitchAccount(false);
    },
  });
  const validateTrigger = useMemo(() => {
    if (firstSubmit) {
      return ["onSubmit"];
    }
    return ["onChange", "onSubmit"];
  }, [firstSubmit]);

  const onFinish = (values: LoginForm) => {
    // validationFormdata
    console.log("Received values of form: ", values);
    // clear pre Account cookie

    // validationFail  do something

    // if success send request

    mutateAsync(values);
  };

  const onFinishFailed = ({ values, errorFields, outOfDate }: any) => {
    setFirstSubmit(false);
  };

  const clearForm = () => {
    form.resetFields(["username", "password"]);
  };
  if (!switchAccount) {
    if (user_name) {
      return (
        <div className="already-login">
          <h2 className="already-login-title">You Are Logged In </h2>
          <div className="already-login-name">
            Current Account: <Link to={"/account"}>{user_name}</Link>
          </div>
          <div className="already-login-option">
            <div className="back">
              <Statistic.Countdown
                format="s"
                suffix=" seconds later"
                value={Date.now() + 5 * 1000}
                onChange={() => {}}
                onFinish={() => navigateTo("/")}
              />
              <span className="back">
                Back To <Link to={"/"}>Home</Link>
              </span>
            </div>
            <p className="or">OR</p>
            <Button size="large" onClick={() => setSwitchAccount(true)}>
              Switch Account
            </Button>
          </div>
        </div>
      );
    }
  }

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
        name="user_name"
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
          {
            pattern: validationEmailOrUserNameRegExp,
            message: "Your Input Username Or Email Is Incorrect!",
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
          autoComplete=""
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              hasFeedback
              name="safety_verify_code"
              noStyle
              rules={[
                {
                  required: true,
                  message: "please input the captcha you got!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>GET CAPTCHA</Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item className="remember-forgot">
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className="remember-label">Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/account/forgot">
          Forgot password?
        </Link>
      </Form.Item>
      <Form.Item
        name="agree_us"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("you must should accept agreement")),
          },
        ]}
        className="argee"
        {...tailFormItemLayout}
      >
        <Checkbox className="agree-check">
          I have read the{" "}
          <Link className="login-form-agree" to="/account/agree">
            agreement
          </Link>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          loading={isLoading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
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
