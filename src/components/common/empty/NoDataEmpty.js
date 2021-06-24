import { Button, Empty } from "antd";
import React from "react";

const NoDataEmpty = ({ emptyFunction, data }) => {
  return (
    <Empty
      description={
        <span>
          <h2>No Mixtapes Uploaded yet </h2>
          <p>Click the Upload button to upload new {data}</p>
        </span>
      }
    >
      <Button onClick={emptyFunction} type="primary">
        Upload New Mixtapes
      </Button>
    </Empty>
  );
};

export default NoDataEmpty;
