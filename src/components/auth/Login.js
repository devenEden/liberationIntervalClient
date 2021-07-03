import { message, Modal } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { authApiCall } from "../../api/auth/auth";
import ForgotPassword from "../../components/auth/ForgotPassword";
import LoginForm from "../../components/auth/LoginForm";
import LoginFormInfo from "../../components/auth/LoginFormInfo";
import {
  toggleForgotPasswordModal,
  toggleLoginSuccess,
} from "../../actions/global/globalActions";

export class LoginLayout extends Component {
  loginUser = async (values) => {
    console.log(
      "Action",
      this.props.toggleLoginSuccess({ success: false, loading: true })
    );
    const res = await authApiCall(
      this.props.api_url,
      values,
      "/api/auth/login"
    );
    try {
      if (!res.success) {
        this.props.toggleLoginSuccess({ success: false, loading: false });
        message.error(res.error || "Sorry an error occurred please");
      } else {
        this.props.toggleLoginSuccess({ success: true, loading: false });
        localStorage.setItem("auth_token", res.token);
        window.location = "/home";
      }
    } catch (error) {
      message.error("Sorry an error occurred when you tried to log in");
    }
  };
  forgotPassword = async (values) => {
    const msgLoadingLogin = message.loading("Verifying your email address ...");
    const res = await authApiCall(
      this.props.api_url,
      values,
      "/api/auth/forgotPassword"
    );
    if (!res.success) {
      setTimeout(msgLoadingLogin);
      message.error(res.error);
    } else {
      console.log("Action", this.props.toggleForgotPasswordModal(false));
      Modal.success({
        title: "Email address verified",
        content: (
          <div>
            <h1>An email has been sent to your account</h1>
            <p>Please check and use it to reset your password</p>
          </div>
        ),
        onOk() {},
      });

      setTimeout(msgLoadingLogin);
    }
  };
  render() {
    return (
      <div className="container-central">
        <div
          style={{ marginTop: "70px" }}
          className="auth-form-container box-shadow"
        >
          <LoginForm submitLoginForm={this.loginUser} />
          <LoginFormInfo />
          <ForgotPassword submitForgotPasswordForm={this.forgotPassword} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    api_url: state.globalReducer.api_url,
  };
};
const mapDispatchToProps = () => {
  return {
    toggleForgotPasswordModal,
    toggleLoginSuccess,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(LoginLayout);
