import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default (props) => (
  <ToastContainer
    autoClose={1500}
    position="bottom-center"
    hideProgressBar
    newestOnTop
    {...props}
  />
);
