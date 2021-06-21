import React, { useEffect } from "react";
import { Avatar, Button, Empty, List } from "antd";
import { IoMdMusicalNote } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromServer } from "../../api/generalApiCalls";
import {
  setHomePageMusicError,
  setHomePageMusic,
} from "../../actions/musicActions";
import { useHistory } from "react-router-dom";

const MusicContainer = (props) => {
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const loading = useSelector(
    (state) => state.musicReducer.homePageMusicLoading
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const getHomePageMusic = async () => {
    try {
      const res = await getDataFromServer(api_url, "/api/music");
      console.log(
        "Action",
        dispatch(
          setHomePageMusic({
            success: true,
            loading: true,
            music: res.data.tracks.slice(0, 5),
          })
        )
      );
    } catch (error) {
      console.error('Error when trying to display music on home page');
      console.log(
        "Action",
        dispatch(
          setHomePageMusicError({
            success: false,
            loading: false,
            music: [],
          })
        )
      );
    }
  };

  useEffect(() => {
    getHomePageMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToMusicPage = () => {
    history.push("/music");
  };
  const music = useSelector((state) => state.musicReducer.homePageMusic);

  return (
    <div className="music-home-div">
      <div className="music-div-content">
        {loading ? (
          <div className="main-loader">
            <div class="loader-1 center">
              <span></span>
            </div>
          </div>
        ) : (
          <>
            <h2>Trending music</h2>
            {music.length <= 0 ? (
              <div>
                <Empty
                  imageStyle={{
                    height: 60,
                  }}
                  description={<h3>Sorry No Music Available</h3>}
                ></Empty>
              </div>
            ) : (
              <>
                <List
                  itemLayout="horizontal"
                  dataSource={music}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.images.coverart} />}
                        title={
                          <a target="blank" href={item.share.href}>
                            {item.title}
                          </a>
                        }
                        description={item.subtitle}
                      />
                    </List.Item>
                  )}
                />
                <br />
                <Button onClick={goToMusicPage} type="primary">
                  More Music &nbsp; <IoMdMusicalNote />
                </Button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MusicContainer;
