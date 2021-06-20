import React, { useEffect } from "react";
import { BackTop, Layout } from "antd";
import Header from "../../components/common/Header";
import NavDrawer from "../../components/common/NavDrawer";
import CardContainer from "../../components/mixtapes/CardContainer";
import MusicContainer from "../../components/home/MusicContainer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { verifyTokenApiCall } from "../../api/auth/auth";
import { getAllMixtapesFromServer } from "../../api/home/homeApiCall";

const HomePage = () => {

  const api_url = useSelector((state) => state.globalReducer.api_url);
  const history = useHistory();
  const verify = async () => {
    const res = await verifyTokenApiCall(api_url);
    if (!res.success) {
      history.push("/authentication");
      localStorage.removeItem('auth_token');
    }
  };

  const getAllMixtapes = async () => {
    const res = await getAllMixtapesFromServer(api_url,'/api/mixtapes/');
    console.log(res);
  }
  useEffect(() => {
    verify();
    getAllMixtapes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Layout>
        <div className="home-container">
          <Header />
          <div className="main-container">
            <NavDrawer />
            <CardContainer />
            <MusicContainer  />
            <BackTop />
          </div>
        </div>
      </Layout>
    </div>
  );
};


export default HomePage;
