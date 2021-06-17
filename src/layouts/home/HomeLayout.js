import React, { Component } from "react";
import Header from "../../components/common/Header";
import CardContainer from "../../components/home/CardContainer";
import MusicContainer from "../../components/home/MusicContainer";


export class HomeLayout extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="main-container">
          <CardContainer />
          <MusicContainer />
        </div>
      </div>
    );
  }
}

export default HomeLayout;
