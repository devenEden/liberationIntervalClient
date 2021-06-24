import React, { useEffect } from "react";
import { BackTop, Layout, message } from "antd";
import Header from "../../components/common/Header";
import NavDrawer from "../../components/common/drawers/NavDrawer";
import CardContainer from "../../components/mixtapes/CardContainer";
import MusicContainer from "../../components/home/MusicContainer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { verifyTokenApiCall } from "../../api/auth/auth";
import ProfileDrawer from "../../components/common/drawers/ProfileDrawer";
import AOS from 'aos';

const HomePage = () => {
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const history = useHistory();
  const verify = async () => {
    try {
      const res = await verifyTokenApiCall(api_url);
      if (!res.success) {
        history.push("/authentication");
        localStorage.removeItem("auth_token");
        message.error('Sorry your session has expired');
      }
    } catch (error) {
      console.error(
        "Server failed to respond error during home page verification"
      );
    }
  };

  useEffect(() => {
    verify();
    AOS.init({duration:1000})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Layout>
        <div className="home-container">
          <Header />
          <div className="main-container">
            <NavDrawer />
            <ProfileDrawer />
            <CardContainer />
            <MusicContainer />
            <BackTop />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
