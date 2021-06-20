import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthHeader from "../../components/auth/AuthHeader";
import LoginLayout from "../../components/auth/Login";
import RegisterLayout from "../../components/auth/Register";

const AuthPage = ({ history }) => {
  const authLayout = useSelector((state) => state.globalReducer.authLayout);
  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      history.push("/home");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <AuthHeader />
      {authLayout === "login" ? (
        <LoginLayout history={history} />
      ) : (
        <RegisterLayout history={history} />
      )}
    </div>
  );
};

export default AuthPage;
