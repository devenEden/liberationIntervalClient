import React from "react";
import { Form, Input, Button, message, Modal } from "antd";
import { resetPasswordApiCall } from "../../api/auth/auth";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ResetPasswordPage = ({ history }) => {
  const msgLoading = message.loading("Resetting your password ...");
  const api_url = useSelector((state) => state.globalReducer.api_url);

  const { resetToken } = useParams();
  const onFinish = async (values) => {
    const res =  await resetPasswordApiCall(
      api_url,
      values,
      `/api/auth/resetPassword/${resetToken}`
    );
    if (!res.success) {
      setTimeout(msgLoading);
      message.error(res.error);
    } else {
      Modal.success({
        title: "Passsword has been reset",
        content: (
          <div>
            <h1>Password has been reset. You can now login</h1>
          </div>
        ),
        onOk() { history.push('/authentication')},
      });
      setTimeout(msgLoading);
    }
  };
  const onFinishFailed = (values) => {
    console.log(values);
  };
  const returnToLogin = () => {
    history.push('/authentication');
  }
  return (
    <div className="container-central">
      <div className="auth-form-container box-shadow">
        <div className="auth-form-div">
          <Form
            layout="vertical"
            labelCol={{ span: 16 }}
            wrapperCol={{
              span: 32,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item>
              <h1>Reset Your Password</h1>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              hasFeedback
              rules={[
                { required: true, message: "Please enter a password" },
                {
                  min: 8,
                  message: "Password should be greater than 8 characters",
                },
              ]}
            >
              <Input.Password autoComplete="off" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirmPassword" },
                {
                  min: 8,
                  message: "Password should be greater than 8 characters",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password autoComplete="off" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="auth-form-info">
          <h1>Liberation Interval</h1>
          <p>Return to login page here</p>
          <button onClick={returnToLogin} className="auth-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
