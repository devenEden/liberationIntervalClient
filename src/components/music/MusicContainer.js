import React, { useEffect } from "react";
import { Button, Card, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromServer } from "../../api/generalApiCalls";
import {
  setMusicPageMusic,
  setMusicPageMusicError,
} from "../../actions/musicActions";
import MainLoader from "../common/MainLoader";

const { Meta } = Card;

const MusicContainer = () => {
  const loading = useSelector(
    (state) => state.musicReducer.musicPageMusicLoading
  );
  const music = useSelector((state) => state.musicReducer.musicPageMusic);
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const dispatch = useDispatch();
  const getMusic = async () => {
    try {
      const res = await getDataFromServer(api_url, "/api/music");
      console.log(
        "Action",
        dispatch(
          setMusicPageMusic({
            success: true,
            loading: false,
            music: res.data.tracks,
          })
        )
      );
    } catch (error) {
      console.error("Error occured while displaying music");
      console.log(
        "Action",
        dispatch(
          setMusicPageMusicError({
            success: true,
            loading: false,
            music: [],
          })
        )
      );
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
         <MainLoader />
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
      <br />
      {music.length > 0 && (
        <div className="load-more-btn-div">
          <Button type="primary">Load More</Button>
        </div>
      )}
    </div>
  );
};

export default MusicContainer;
