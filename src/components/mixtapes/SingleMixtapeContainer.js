import { Avatar, BackTop, Tooltip } from "antd";
import React, { useEffect } from "react";
import AddMixtapeComment from "./forms/AddMixtapeComment";
import img from "../../assets/s263939.jpg";
import MixtapeComments from "./MixtapeComments";
import SingleMixtapeActions from "./SingleMixtapeActions";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromServer } from "../../api/generalApiCalls";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MainLoader from "../common/loaders/MainLoader";
import moment from "moment";
import {
  getSingleMixtapesError,
  getSingleMixtapesRequest,
} from "../../actions/mixtapeActions";
import ErrorEmpty from "../common/empty/ErrorEmpty";
import { IoMdArrowBack } from "react-icons/io";
import MixtapeButtons from "./buttons/MixtapeButtons";

const SingleMixtapeContainer = () => {
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const loading = useSelector(
    (state) => state.mixtapeReducer.singleMixtapeLoading
  );
  const success = useSelector(
    (state) => state.mixtapeReducer.singleMixtapeSuccess
  );
  const mixtape = useSelector(
    (state) => state.mixtapeReducer.singleMixtapeData
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const fetchSingleMixtapeData = async () => {
    try {
      const res = await getDataFromServer(
        api_url,
        `/api/${history.location.pathname}`
      );
      dispatch(
        getSingleMixtapesRequest({
          success: res.success,
          loading: false,
          mixtape: res.data,
        })
      );
    } catch (error) {
      console.error("Error occured when displaying data ", error);
      dispatch(getSingleMixtapesError({ success: false, loading: false }));
    }
  };

  const returnToPreviosPage = () => {
    history.goBack();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSingleMixtapeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="single-mixtape-wrapper">
      {loading ? (
        <MainLoader />
      ) : (
        <div>
          {!success ? (
            <ErrorEmpty data="mixtape" />
          ) : (
            <div>
              <div className="mixtape-post-title">
                <div className="title-post-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Avatar src={img} />
                  &nbsp;&nbsp;
                  <h2> {mixtape.username}</h2>
                </div>
                <div className="return-button">
                  <Tooltip placement="bottom" title="Return">
                    <p onClick={returnToPreviosPage}>
                      <IoMdArrowBack />
                    </p>
                  </Tooltip>
                </div>
              </div>
              <div className="single-mixtape-container">
                <div className="mixtape-img">
                  <SingleMixtapeActions />
                  <img src={mixtape.imgUrl} alt="" />
                </div>
                <div className="mixtape-details">
                  <div className="mixtape-action-text">
                    <h1>{mixtape.name}</h1>
                    <h6>{moment(mixtape.createdAt).fromNow()} </h6>
                    <p>{mixtape.caption}</p>
                  </div>
                  <MixtapeButtons />
                  <br />
                  <div className="mixtape-comments">
                    <h3>Comments</h3>
                    <AddMixtapeComment />
                    <MixtapeComments />
                  </div>
                </div>
                <BackTop />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleMixtapeContainer;
