import React, { useEffect } from "react";
import { Button, Card, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromServer } from "../../api/generalApiCalls";
import {
  setMusicPageMusic,
  setMusicPageMusicError,
} from "../../actions/musicActions";

const { Meta } = Card;

const MusicContainer = ({ history }) => {
  const loading = useSelector(
    (state) => state.musicReducer.musicPageMusicLoading
  );
  const music = useSelector((state) => state.musicReducer.musicPageMusic);
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const dispatch = useDispatch();
  const getMusic = async () => {
    const res = await getDataFromServer(api_url, "/api/music");
    if (!res.success) {
      const payload = {
        success: false,
        loading: false,
        music: [],
        error: res.error || "error occured",
      };
      console.log("Action", dispatch(setMusicPageMusicError(payload)));
    } else {
      const payload = {
        success: true,
        loading: false,
        music: res.data.tracks,
        error: res.error || "error occured",
      };
      console.log("Action", dispatch(setMusicPageMusic(payload)));
    }
  };
  useEffect(() => {
    getMusic();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="music-wrapper-div">
      <div className="music-container">
        {loading ? (
          <div className="main-loader">
            <div class="loader-1 center">
              <span></span>
            </div>
            &nbsp;&nbsp;
            <h1>loading ...</h1>
          </div>
        ) : (
          <>
            {music.length <= 0 ? (
              <>
                <Empty
                  description={
                    <span>
                      <h2>Sorry we are having trouble loading the music</h2>
                      <p>
                        Please check your internet connection and try to refresh
                        the page
                      </p>
                    </span>
                  }
                ></Empty>
              </>
            ) : (
              <>
                {music.map((song) => {
                  return (
                    <Card
                      key={song.key}
                      data-aos="fade-up"
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img alt={song.title} src={song.images.coverart} />
                      }
                    >
                      <Meta title={song.title} description={song.title} />
                    </Card>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
      <br/>
      <div className="load-more-btn-div">
        <Button type="primary">Load More</Button>
      </div>
    </div>
  );
};

export default MusicContainer;
