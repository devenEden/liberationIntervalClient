import React from "react";
import { IoMdHeartEmpty, IoMdPlay, IoMdText } from "react-icons/io";
import { useDispatch, useSelector, } from "react-redux";
import { toggleMixtapePlayer } from "../../actions/mixtapeActions";

const SingleMixtapeActions = () => {
  const mixtape = useSelector(
    (state) => state.mixtapeReducer.singleMixtapeData
  );
   const dispatch = useDispatch();
  const openPlayer = () => {
     console.log(dispatch(toggleMixtapePlayer('block')))
  }
  return (
    <div className="mixtape-actions">
      <span>
        <IoMdHeartEmpty />
      </span>
      <span>{mixtape.likes}</span>
      &nbsp;
      <span>
        <IoMdText />
      </span>
      <span>{mixtape.comments}</span>
      &nbsp;
      <span onClick={openPlayer}>
        <IoMdPlay />
      </span>
    </div>
  );
};

export default SingleMixtapeActions;
