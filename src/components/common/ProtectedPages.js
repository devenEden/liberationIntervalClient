import { Switch } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Redirect,
  useHistory,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { verifyTokenApiCall } from "../../api/auth/auth";
import routes from "../../routes/routes";

const ProtectedPages = ({ component: Component, path, ...rest }) => {
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const history = useHistory();
  const verify = async () => {
    const res = await verifyTokenApiCall(api_url);
    if (!res.success) history.push("/authentication");
  };
  useEffect(() => {
    verify();
    console.log(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {localStorage.getItem("auth_token") ? (
        <>
          {routes.map((route) => {
            return (
              <Router>
                <Switch>
                  <Route
                    exact
                    key={route.key}
                    path={route.path}
                    component={route.component}
                  />
                </Switch>
              </Router>
            );
          })}
        </>
      ) : (
        <Redirect to="/authentication" />
      )}
    </div>
  );
};

export default ProtectedPages;
