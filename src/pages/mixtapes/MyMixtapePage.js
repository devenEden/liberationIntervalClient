import { Button } from "antd";
import React, { Component } from "react";
import Header from "../../components/common/Header";
import NavDrawer from "../../components/common/drawers/NavDrawer";
import MyMixtapes from "../../components/mixtapes/MyMixtapes";
import ProfileDrawer from "../../components/common/drawers/ProfileDrawer";

export class MyMixtapePage extends Component {
  state = {
    hasData: false,
  };

  createMixtape = () => {
    this.props.history.push("/mixtapes/create");
  };
  render() {
    return (
      <div className="home-container">
        <Header />
        <NavDrawer />
        <ProfileDrawer />
        <div className="main-container">
          <div className="my-mixtapes-container">
            <h1 className="my-mixtapes-title">My Mixtapes</h1>
            <div className="my-mixtapes-div">
              {this.state.hasData ? (
                <>
                  <p className="no-mixtapes-p ">
                    You dont have any mixtapes uploaded
                  </p>
                  <Button onClick={this.createMixtape} type="primary">
                    Upload New Mixtape
                  </Button>
                </>
              ) : (
                <MyMixtapes />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMixtapePage;
