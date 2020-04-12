import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default (props) => (
  <Loader
    style={{ textAlign: "center", padding: "50px 0" }}
    type="Bars"
    height="50px"
    color="#6B5B95"
    {...props}
  />
);
