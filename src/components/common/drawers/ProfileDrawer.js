import { Button, Drawer } from "antd";
import React, { useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import img from "../../../assets/s263939.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  setProfileError,
  toggleProfileDrawer,
} from "../../../actions/global/globalActions";
import { getDataFromServer } from "../../../api/generalApiCalls";
import SecondaryLoader from "../loaders/SecondaryLoader";
import ErrorEmpty from "../empty/ErrorEmpty";

const ProfileDrawer = () => {
  const loading = useSelector((state) => state.globalReducer.profileLoading);
  const success = useSelector((state) => state.globalReducer.profileSuccess);
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const visible = useSelector(
    (state) => state.globalReducer.isProfileDrawerVisible
  );
  const profileInformation = useSelector(
    (state) => state.globalReducer.profileInfo
  );

  const dispatch = useDispatch();
  const closeProfileDrawer = () => {
    dispatch(toggleProfileDrawer(false));
  };

  const getProfileInfo = async () => {
    try {
      const res = await getDataFromServer(api_url, "/api/users/profile");
      dispatch(
        setProfileError({
          success: res.success,
          loading: false,
          profileInfo: { ...res.data },
        })
      );
    } catch (error) {
      console.error("Error: failed to display profile info from server");
      dispatch(
        setProfileError({ success: false, loading: false, profileInfo: {} })
      );
    }
  };

  useEffect(() => {
    getProfileInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Drawer
        onClose={closeProfileDrawer}
        width={300}
        closable
        visible={visible}
      >
        {loading ? (
          <SecondaryLoader />
        ) : !success ? (
          <ErrorEmpty data="Profile Information" />
        ) : (
          <div className="profile-div">
            <div className="profile-info-container">
              <div className="profile-info-img">
                <img src={img} alt="" />
              </div>
              <div className="profile-info-content">
                <h2>{profileInformation.userProfileInfo.username}</h2>
                <p>{profileInformation.userProfileInfo.email}</p>
              </div>
            </div>
            <div className="followers-div">
              <div className="followers-info">
                <h2>{profileInformation.followerInfo.posts}</h2>
                <p>mixtapes</p>
              </div>
              <div className="followers-info">
                <h2>{profileInformation.followerInfo.followers}</h2>
                <p>Followers</p>
              </div>
              <div className="followers-info">
                <h2>{profileInformation.followerInfo.following}</h2>
                <p>Following</p>
              </div>
            </div>
            <div className="profile-info-message">
              <br />
              <br />
              <p>
                You can edit your profile information and configure particular
                settings from here
              </p>
            </div>
            <Button className="btn-center" type="primary">
              Settings &nbsp; <IoMdSettings />
            </Button>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default ProfileDrawer;
