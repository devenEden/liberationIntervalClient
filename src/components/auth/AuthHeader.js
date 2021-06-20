import React from "react";
import { Tooltip } from "antd";
import { IoMdHome } from "react-icons/io";

const AuthHeader = () => {

  const goToLandingPage = () => {
   window.location = "/";
  };
  return (
    <div className="main-header">
      <nav className="nav">
        <div className="nav-title">
          <h1>Liberation Interval</h1>
        </div>
        <div className="nav-links">
          <div onClick={goToLandingPage} className="nav-search">
            <Tooltip placement="bottomLeft" title="Home">
              <IoMdHome />
            </Tooltip>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AuthHeader;
 