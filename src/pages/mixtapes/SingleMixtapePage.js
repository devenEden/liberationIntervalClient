import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { verifyTokenApiCall } from "../../api/auth/auth";
import NavDrawer from "../../components/common/drawers/NavDrawer";
import ProfileDrawer from "../../components/common/drawers/ProfileDrawer";
import Header from "../../components/common/Header";
import SingleMixtapeContainer from "../../components/mixtapes/SingleMixtapeContainer";

const SingleMixtapePage = () => {
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const history = useHistory();
  const verify = async () => {
    try {
      const res = await verifyTokenApiCall(api_url);
      if (!res.success) {
        history.push("/authentication");
        localStorage.removeItem("auth_token");
      }
    } catch (error) {
      console.error(
        "Server failed to respond error during music page verification"
      );
    }
  };

  useEffect(() => {
    verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="home-container">
        <Header />
        <div className="main-container">
          <NavDrawer />
          <ProfileDrawer />
          <SingleMixtapeContainer />
        </div>
      </div>
    </div>
  );
};

export default SingleMixtapePage;
