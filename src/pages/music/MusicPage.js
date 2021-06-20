import Header from "../../components/common/Header";
import React from "react";
import NavDrawer from "../../components/common/NavDrawer";
import MusicContainer from "../../components/music/MusicContainer";

const MusicPage = () => {
  return (
    <div>
      <div className="home-container">
        <Header />
        <div className="main-container">
          <NavDrawer />
          <MusicContainer />
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
