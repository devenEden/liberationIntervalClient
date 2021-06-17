import React from "react";
import { Tooltip } from "antd";
import {
  IoMdMenu,
  IoMdNotifications,
  IoMdPerson,
  IoMdSearch,
} from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleglobalDrawer } from "../../actions/global/globalActions";

const Header = () => {

  const dispatch = useDispatch();
  const  openDrawer = () => {
    console.log("Action",dispatch(toggleglobalDrawer(true)));
  };
  return (
    <div className="main-header">
      <nav className="nav">
        <div className="nav-title">
          <div onClick={openDrawer} className="menu-button">
              <IoMdMenu />
          </div>
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
