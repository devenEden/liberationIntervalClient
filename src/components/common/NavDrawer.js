import React from "react";
import { Link } from "react-router-dom";
import {
  IoMdArrowUp,
  IoMdHome,
  IoMdLogOut,
  IoMdMusicalNote,
  IoMdRecording,
} from "react-icons/io";
import { Drawer, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleglobalDrawer } from "../../actions/global/globalActions";

const NavDrawer = () => {
  const drawerVisible = useSelector(
    (state) => state.globalReducer.isglobalDrawerVisible
  );
  const dispatch = useDispatch();
  const closeDrawer = () => {
    console.log("Action", dispatch(toggleglobalDrawer(false)));
  };
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
        <Link>
          <h2 onClick={closeDrawer} className="drawer-link">
            <Space>
              <span className="drawer-icon">
                <IoMdArrowUp />
              </span>
              <span>Upload Mixtape</span>
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
        <Link>
          <h2 onClick={closeDrawer} className="drawer-link">
            <Space>
              <span className="drawer-icon">
                <IoMdLogOut />
              </span>
              <span>Logout</span>
            </Space>
          </h2>
        </Link>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
