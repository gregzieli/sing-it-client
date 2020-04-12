import React from "react";
import { toast } from "react-toastify";
import { FaRegStar, FaStar } from "react-icons/fa";

import StashContext from "../../context/stash-context";

function StashButton({ song }) {
  const { stash, setStash } = React.useContext(StashContext);

  const add = () => {
    setStash((stash) => [...stash, song]);
    toast("Added to favorites");
  };

  const remove = () => {
    setStash((stash) => stash.filter((x) => x._id !== song._id));
    toast("Removed from favorites");
  };

  const isInStash = stash.some((x) => x._id === song._id);

  return isInStash ? (
    <FaStar onClick={remove} title={"Remove"} color={"gold"} size={24} />
  ) : (
    <FaRegStar onClick={add} title={"Add"} color={"#EBEBEB"} size={24} />
  );
}

export default StashButton;
