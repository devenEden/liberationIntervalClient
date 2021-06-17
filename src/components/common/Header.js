import React from "react";
import { Tooltip } from "antd";
import {
  IoMdMenu,
  IoMdNotifications,
  IoMdPerson,
  IoMdSearch,
} from "react-icons/io";

const Header = () => {
  return (
    <div className="main-header">
      <nav className="nav">
        <div className="nav-title">
          <Tooltip placement="bottomLeft" title="Menu">
            <IoMdMenu />
          </Tooltip>
          &nbsp;&nbsp;
          <h1>Liberation Interval</h1>
        </div>
        <div className="nav-links">
          <div className="nav-search">
            <Tooltip placement="bottomLeft" title="Search">
              <IoMdSearch />
            </Tooltip>
          </div>
          &nbsp;&nbsp;
          <div className="nav-notifications">
            <Tooltip placement="bottom" title="Notifications">
              <IoMdNotifications />
            </Tooltip>
          </div>
          &nbsp;&nbsp;
          <div className="nav-profile">
            <Tooltip placement="bottomRight" title="Profile">
              <IoMdPerson />
            </Tooltip>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
