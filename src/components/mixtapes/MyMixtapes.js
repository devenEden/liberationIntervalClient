import React, { useEffect } from "react";
import { Card } from "antd";
import img from "../../assets/s263939.jpg";
import { getDataFromServer } from "../../api/generalApiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyMixtapesError,
  getMyMixtapesRequest,
} from "../../actions/mixtapeActions";
import ErrorEmpty from "../common/empty/ErrorEmpty";
import NoDataEmpty from "../common/empty/NoDataEmpty";
import { useHistory } from "react-router-dom";

const { Meta } = Card;
const MyMixtapes = () => {
  const loading = useSelector((state) => state.mixtapeReducer.loading);
  const api_url = useSelector((state) => state.globalReducer.api_url);
  const myMixtapes = useSelector((state) => state.mixtapeReducer.myMixtapes);
  const success = useSelector(
    (state) => state.mixtapeReducer.getMyMixtapesSuccess
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const getMyMixtapes = async () => {
    const res = await getDataFromServer(api_url, "/api/mixtapes/myMixtapes");
    try {
      console.log(res.data[0]);
      dispatch(
        getMyMixtapesRequest({
          loading: false,
          success: res.success,
          myMixtapes: res.data,
        })
      );
    } catch (error) {
      console.error("Error occured while loading your mixtapes");
      dispatch(
        getMyMixtapesError({ loading: false, success: false, myMixtapes: [] })
      );
    }
  };

  const emptyRedirectFunction = () => {
    history.push("/mixtapes/create");
  };

  useEffect(() => {
    getMyMixtapes();
    console.log(loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mixtapes-container">
      {!success ? (
        <ErrorEmpty data="mixtapes" />
      ) : (
        <>
          {myMixtapes.length > 0 ? (
            <>
              {myMixtapes.map((mixtape) => {
                return (
                  <Card
                    key={mixtape._id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={mixtape.imgUrl} />}
                  >
                    <Meta title={mixtape.name} description={mixtape.caption}/>
                  </Card>
                );
              })}
            </>
          ) : (
            <NoDataEmpty
              emptyFunction={emptyRedirectFunction}
              data="mixtapes"
            />
          )}
        </>
      )}
    </div>
  );
};

export default MyMixtapes;
