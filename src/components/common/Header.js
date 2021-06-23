import React from "react";
import { IoMdMenu, IoMdPerson, IoMdSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  toggleglobalDrawer,
  toggleProfileDrawer,
} from "../../actions/global/globalActions";

const Header = () => {
  const dispatch = useDispatch();
  const openDrawer = () => {
    console.log("Action", dispatch(toggleglobalDrawer(true)));
  };

  const openProfileDrawer = () => {
    console.log("Action", dispatch(toggleProfileDrawer(true)));
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
          <div className="nav-link-item">
            <IoMdSearch />
          </div> 
          &nbsp;&nbsp;
          <div className="nav-link-item">
            <IoMdPerson onClick={openProfileDrawer} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
