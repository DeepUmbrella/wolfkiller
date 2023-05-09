import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import "./register.scss";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { register } from "@api";
import { RegisterForm } from "@vtypes";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

export const Register: React.FC = () => {
  const [form] = Form.useForm<RegisterForm>();

  const { isLoading, mutateAsync } = useMutation("register", register, {
    retry: false,
    onSuccess: (data, varibles, context) => {
      console.log(data, varibles, context, "1111");
    },
  });
  const onFinish = (values: RegisterForm) => {
    console.log("Received values of form: ", values);
    mutateAsync(values);
  };
  const clearForm = () => {
    form.resetFields();
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value={0}>+86</Option>
        <Option value={1}>+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      className="register-form"
      onFinish={onFinish}
      initialValues={{
        prefix: 0,
      }}
      layout="vertical"
      scrollToFirstError
    >
      <Form.Item
        name="user_name"
        label="User Name"
        tooltip="What do you want others to call you?"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        tooltip="Make sure this email can accept the verification information sent by us!"
        hasFeedback
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
        tooltip="The password must be 6-32 characters and have at least one uppercase letter!"
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="secend_password"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone_number"
        hasFeedback
        label="Phone Number"
        rules={[
          {
            pattern: /^(13[0-9]|14[5|7]|15[0-9]|18[0-9]|19[0-9])\d{8}$/,
            required: true,
            max: 11,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Captcha"
        extra="We must make sure that your are a human."
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              hasFeedback
              name="safety_verify_code"
              noStyle
              rules={[
                {
                  required: true,
                  message: "please input the captcha you got in your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agree_us"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        wrapperCol={{ span: 24 }}
      >
        <Checkbox className="agree-check">
          I have read the{" "}
          <Link className="login-form-agree" to="/account/agreements">
            agreement
          </Link>
        </Checkbox>
      </Form.Item>
      <Row className="register-form-btn-group">
        <Col span={11}>
          <Button
            loading={isLoading}
            className="register-form-btn register-form-submit"
            type="primary"
            htmlType="submit"
          >
            SIGN UP
          </Button>
        </Col>
        <Col span={11}>
          <Button
            className="register-form-btn register-form-reset"
            danger
            type="primary"
            onClick={clearForm}
          >
            REST FORM
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;
