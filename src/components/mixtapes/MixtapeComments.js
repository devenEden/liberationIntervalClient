import { Avatar, Comment } from "antd";
import img from "../../assets/s263939.jpg";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromServer } from "../../api/generalApiCalls";
import { useHistory } from "react-router-dom";
import SecondaryLoader from "../common/loaders/SecondaryLoader";
import ErrorEmpty from "../common/empty/ErrorEmpty";
import {
  getMixtapeCommentsError,
  getMixtapeCommentsRequest,
} from "../../actions/mixtapeActions";
import moment from "moment";

const MixtapeComments = () => {
  const {
    getMixtapeCommentsSuccess,
    getMixtapeCommentLoading,
    mixtapeComments,
  } = useSelector((state) => state.mixtapeReducer);
  const { api_url } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const getMixtapeComments = async () => {
    const routePathArray = history.location.pathname.split("/");
    try {
      const res = await getDataFromServer(
        api_url,
        `/api/mixtapes/comments/${routePathArray[2]}`
      );
      dispatch(
        getMixtapeCommentsRequest({
          success: res.success,
          loading: false,
          comments: res.data,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(getMixtapeCommentsError({ success: false, loading: false }));
    }
  };

  useEffect(() => {
    getMixtapeComments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {getMixtapeCommentLoading ? (
        <SecondaryLoader />
      ) : (
        <>
          {!getMixtapeCommentsSuccess ? (
            <ErrorEmpty data="comments" />
          ) : (
            <>
              {mixtapeComments.map((comment) => {
                return (
                  <Comment
                    key={comment._id}
                    author={<h2>{comment.username}</h2>}
                    avatar={<Avatar alt="text" src={img} />}
                    content={
                      <>
                        <p>{comment.comment}</p>
                        <span style={{ color: "gray" }}>
                          {moment(comment.createdAt).fromNow()}
                        </span>
                      </>
                    }
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MixtapeComments;
