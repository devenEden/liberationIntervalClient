import { Empty } from "antd";
import React from "react";

const ErrorEmpty = ({data}) => {
  return (
    <Empty
      description={
        <span>
          <h2>Sorry we are having trouble loading the {data}</h2>
          <p>
            Please check your internet connection and refresh the page
          </p>
        </span>
      }
    ></Empty>
  );
};

export default ErrorEmpty;
