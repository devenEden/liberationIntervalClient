import { message } from "antd";

import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyTokenApiCall } from "../../api/auth/auth";
import Header from "../../components/common/Header";
import NavDrawer from "../../components/common/drawers/NavDrawer";
import AddMixtapeDetails from "../../components/mixtapes/forms/AddMixtapeDetails";
import AddMixtapeImage from "../../components/mixtapes/forms/AddMixtapesImage";
import AddMixtapeAudio from "../../components/mixtapes/forms/AddMixtapesAudio";
import { setMixtapeForm } from "../../actions/mixtapeActions";
import ProfileDrawer from "../../components/common/drawers/ProfileDrawer";

export class AddMixtapePage extends Component {
  verify = async () => {
    try {
      const res = await verifyTokenApiCall(this.props.api_url);
      if (!res.success) {
        this.props.history.push("/authentication");
        localStorage.removeItem("auth_token");
        message.error("Sorry your session has expired");
      }
    } catch (error) {
      console.error(
        "Server failed to respond error during home page verification"
      );
    }
  };

  setAddMixtapeForm = () => {
    const { addMixtapeStep } = localStorage;
    if (addMixtapeStep) this.props.setMixtapeForm(addMixtapeStep);
  };

  componentDidMount() {
    this.setAddMixtapeForm();
    this.verify();
  }
  onFinish = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div>
        <div className="home-container">
          <Header />
          <NavDrawer />
          <ProfileDrawer />
          <div className="add-mixtape-form-div">
            {this.props.form === "details" && <AddMixtapeDetails />}
            {this.props.form === "coverImage" && <AddMixtapeImage />}
            {this.props.form === "audio" && <AddMixtapeAudio />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    api_url: state.globalReducer.api_url,
    form: state.mixtapeReducer.AddMixtapeForm,
  };
};

const mapDispatchToProps = () => {
  return {
    setMixtapeForm,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(AddMixtapePage);
