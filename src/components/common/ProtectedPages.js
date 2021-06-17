import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { verifyTokenApiCall } from "../../api/auth/auth";

const ProtectedPages = ({ component: Component, ...rest }) => {
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const history = useHistory();
  const verify = async () => {
    const res = await verifyTokenApiCall(api_url);
    if (!res.success) history.push("/authentication");
  };
  useEffect(() => {
    verify();
  }, []);
  return (
    <div>
      {localStorage.getItem("auth_token") ? (
        <Component history={history} />
      ) : (
        <Redirect to="/authentication" />
      )}
    </div>
  );
};

export default ProtectedPages;
