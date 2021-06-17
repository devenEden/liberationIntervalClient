import React, { Component } from "react";
import Header from "../../components/common/Header";
import NavDrawer from "../../components/common/NavDrawer";
import MusicContainer from "../../components/music/MusicContainer";

export class MusicLayout extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="main-container">
            <NavDrawer />
            <MusicContainer />
        </div>
      </div>
    );
  }
}

export default MusicLayout;
