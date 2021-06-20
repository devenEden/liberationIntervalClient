import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleForgotPasswordModal } from "../../actions/global/globalActions";

const LoginForm = ({ submitLoginForm }) => {
  const onFinish = (values) => {
    submitLoginForm(values);
  };

  const loading = useSelector(
    (state) => state.globalReducer.isLoginButtonLoading
  );

  const dispatch = useDispatch();

  const openForgotPasswordModal = () => {
    console.log(dispatch(toggleForgotPasswordModal(true)));
  };

  return (
    <div className="auth-form-div">
      <Form
        layout="vertical"
        labelCol={{ span: 9 }}
        wrapperCol={{
          span: 32,
        }}
        onFinish={onFinish}
      >
        <Form.Item>
          <h1>Login </h1>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter an email" },
            {
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          ]}
        >
          
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please enter a password" },
            { min: 8, message: "Password should be greater than 8 characters" },
          ]}
        >
          <Input.Password autoComplete="off" />
        </Form.Item>
        <Form.Item>
          <Button loading={loading} htmlType="submit" type="primary">
            Login
          </Button>
        </Form.Item>
        <Form.Item>
          {" "}
          <p className="forgot-password" onClick={openForgotPasswordModal}>
            Forgot password ?
          </p>{" "}
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
