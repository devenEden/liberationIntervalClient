import { message, Modal } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { authApiCall } from "../../api/auth/auth";
import ForgotPassword from "../../components/auth/ForgotPassword";
import LoginForm from "../../components/auth/LoginForm";
import LoginFormInfo from "../../components/auth/LoginFormInfo";
import { toggleForgotPasswordModal } from '../../actions/global/globalActions';

export class LoginLayout extends Component {
  loginUser = async (values) => {
    const msgLoadingLogin = message.loading("Logging you in ...");
    const res = await authApiCall(
      this.props.api_url,
      values,
      "/api/auth/login"
    );
    if (!res.success) {
      setTimeout(msgLoadingLogin);
      message.error(res.error);
    } else {
      localStorage.setItem("auth_token", res.token);
      setTimeout(msgLoadingLogin);
      this.props.history.push("/home");
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
      console.log('Action',this.props.toggleForgotPasswordModal(false));
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
        <div className="auth-form-container box-shadow">
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
        toggleForgotPasswordModal
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(LoginLayout);
