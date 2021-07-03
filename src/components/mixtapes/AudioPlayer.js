import { Avatar, Button, List } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMixtapePlayer } from "../../actions/mixtapeActions";


const AudioPlayer = () => {
  const audio = useSelector((state) => state.mixtapeReducer.singleMixtapeData);
  const display = useSelector((state) => state.mixtapeReducer.playerDisplay);
  const dispatch = useDispatch();
  const openPlayer = () => {
    console.log(dispatch(toggleMixtapePlayer('none')))
 }
  return (
    <div style={{display}}>
      <div className="mixtape-audio-player">
        <div className="player-container">
          <div className="mixtape-player-details">
            <List.Item.Meta
              avatar={<Avatar src={audio.imgUrl} />}
              title={audio.name}
              description={audio.username}
            />
          </div>
          <div className="mixtape-player">
            <audio controls>
              <source src={audio.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        </div>
        <div className="close-player">
          <Button onClick={openPlayer} type="primary">X</Button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
