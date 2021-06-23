import React, { useEffect } from "react";
import { Button, Card, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllMixtapesFromServer } from "../../api/home/homeApiCall";
import {
  setMixtapesError,
  setMixtapesRequest,
} from "../../actions/mixtapeActions";
import MainLoader from "../common/loaders/MainLoader";

const { Meta } = Card;
const CardContainer = () => {
  const loading = useSelector((state) => state.mixtapeReducer.loading);
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const mixtapes = useSelector((state) => state.mixtapeReducer.mixtapes);
  const success = useSelector((state) => state.mixtapeReducer.success);

  const dispatch = useDispatch();

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
    console.log(e.target.offsetParent.id);
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
                <Empty
                  description={
                    <span>
                      <h2>No Mixtapes Uploaded yet </h2>
                      <p>Click the Upload button to upload hot new mixtapes</p>
                    </span>
                  }
                >
                  <Button type="primary">Upload New Mixtapes</Button>
                </Empty>
              ) : (
                <Empty
                  description={
                    <span>
                      <h2>Sorry we are having trouble loading the mixtapes</h2>
                      <p>
                        Please check your connection and try to refresh the page
                      </p>
                    </span>
                  }
                ></Empty>
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
                    cover={<img alt="example" src={mixtape.imgUrl} />}
                  >
                    <Meta
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
