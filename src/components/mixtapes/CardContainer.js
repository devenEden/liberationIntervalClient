import React, { useEffect } from "react";
import { Card, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllMixtapesFromServer } from "../../api/home/homeApiCall";
import {
  setMixtapesError,
  setMixtapesRequest,
} from "../../actions/mixtapeActions";
import MainLoader from "../common/loaders/MainLoader";
import ErrorEmpty from "../common/empty/ErrorEmpty";
import { useHistory } from "react-router-dom";
import NoDataEmpty from "../common/empty/NoDataEmpty";
import img from "../../assets/s263939.jpg";

const { Meta } = Card;
const CardContainer = () => {
  const loading = useSelector((state) => state.mixtapeReducer.loading);
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const mixtapes = useSelector((state) => state.mixtapeReducer.mixtapes);
  const success = useSelector((state) => state.mixtapeReducer.success);
  const dispatch = useDispatch();
  const history = useHistory();

  const getAllMixtapes = async () => {
    const res = await getAllMixtapesFromServer(api_url, "/api/mixtapes");
    try {
      if (res.success) {
        const payload = {
          success: res.success,
          loading: false,
          mixtapes: res.data,
        };
        console.log("Action", dispatch(setMixtapesRequest(payload)));
      } else {
        console.log(
          "Action",
          dispatch(
            setMixtapesRequest({
              success: false,
              loading: false,
              mixtapes: [],
            })
          )
        );
      }
    } catch (error) {
      console.error("Error occured while trying to display mixtapes");
      console.log(
        "Action",
        dispatch(
          setMixtapesError({
            success: false,
            loading: false,
            mixtapes: [],
          })
        )
      );
    }
  };
  const openMixtape = (e) => {
    history.push(`/mixtapes/${e.target.offsetParent.id}`);
  };

  const emptyRedirectFunction = (e) => {
    history.push("/mixtapes/create");
  };
  useEffect(() => {
    getAllMixtapes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mixtapes-container">
      {loading ? (
        <MainLoader />
      ) : (
        <>
          {mixtapes.length <= 0 ? (
            <>
              {success ? (
                <NoDataEmpty
                  data="mixtapes"
                  emptyFunction={emptyRedirectFunction}
                />
              ) : (
                <ErrorEmpty data="mixtapes" />
              )}
            </>
          ) : (
            <>
              {mixtapes.map((mixtape) => {
                return (
                  <Card
                    onClick={openMixtape}
                    id={mixtape._id}
                    key={mixtape._id}
                    data-aos="fade-up"
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img alt={mixtape.djUsername} src={mixtape.imgUrl} />
                    }
                  >
                    <Meta
                      avatar={<Avatar src={img} alt={mixtape.djUsername} />}
                      title={mixtape.djUsername}
                      description={mixtape.name}
                    />
                  </Card>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CardContainer;
