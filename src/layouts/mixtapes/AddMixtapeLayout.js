import React, { Component } from "react";
import Header from "../../components/common/Header";
import NavDrawer from "../../components/common/NavDrawer";

export class AddMixtapeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavDrawer />
        <h1>Add mixtape </h1>
      </div>
    );
  }
}

export default AddMixtapeLayout;
