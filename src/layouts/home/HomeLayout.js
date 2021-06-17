import React, { Component } from "react";
import Header from "../../components/common/Header";
import CardContainer from "../../components/home/CardContainer";
import MusicContainer from "../../components/home/MusicContainer";
import { toggleglobalDrawer } from "../../actions/global/globalActions";
import { connect } from "react-redux";
import NavDrawer from "../../components/common/NavDrawer";

export class HomeLayout extends Component {

  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="main-container">
          <NavDrawer />
          <CardContainer />
          <MusicContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    drawerVisible: state.globalReducer.isglobalDrawerVisible,
  };
};

const mapDispatchToProps = () => {
  return {
    toggleglobalDrawer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(HomeLayout);
