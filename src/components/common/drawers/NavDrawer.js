import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  IoMdHeadset,
  IoMdHome,
  IoMdLogOut,
  IoMdMusicalNote,
  IoMdRecording,
} from "react-icons/io";
import { Drawer, message, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleglobalDrawer } from "../../../actions/global/globalActions";

const NavDrawer = () => {
  const drawerVisible = useSelector(
    (state) => state.globalReducer.isglobalDrawerVisible
  );
  const dispatch = useDispatch();
  const closeDrawer = () => {
    console.log("Action", dispatch(toggleglobalDrawer(false)));
  };

  const history = useHistory();
  const logoutUser = () => {
    const msgLoading = message.loading('Logging you out ...');
    localStorage.removeItem('auth_token');
    setTimeout(msgLoading);
    console.log("Action", dispatch(toggleglobalDrawer(false)));
    history.push('/authentication');
  }
  return (
    <div>
      <Drawer
        onClose={closeDrawer}
        placement="left"
        visible={drawerVisible}
        closable
      >
        <br />
        <Link to="/home">
          <h2 onClick={closeDrawer} className="drawer-link">
            <Space>
              <span className="drawer-icon">
                <IoMdHome />
              </span>
              <span>Home</span>
            </Space>
          </h2>
        </Link>
        <Link to='/mixtapes'>
          <h2 onClick={closeDrawer} className="drawer-link">
            <Space>
              <span className="drawer-icon">
                <IoMdHeadset />
              </span>
              <span>My Mixtapes</span>
            </Space>
          </h2>
        </Link>
        <Link>
          <h2 onClick={closeDrawer} className="drawer-link">
            <Space>
              <span className="drawer-icon">
                <IoMdRecording />
              </span>
              <span>Mixtape Requests</span>
            </Space>
          </h2>
        </Link>
        <Link to='/music'>
          <h2 onClick={closeDrawer} className="drawer-link">
            <Space>
              <span className="drawer-icon">
                <IoMdMusicalNote />
              </span>
              <span>Music</span>
            </Space>
          </h2>
        </Link>
          <h2 onClick={logoutUser} className="drawer-link logout-btn">
            <Space>
              <span className="drawer-icon">
                <IoMdLogOut />
              </span>
              <span>Logout</span>
            </Space>
          </h2>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
