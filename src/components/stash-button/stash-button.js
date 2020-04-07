/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { toast } from "react-toastify";

import StashContext from "../../contexts/stash-context";

function StashButton({ song }) {
  const { stash, setStash } = React.useContext(StashContext);

  const add = () => {
    setStash((stash) => [...stash, song]);
    toast("Added to stash");
  };

  const remove = () => {
    setStash((stash) => stash.filter((x) => x._id !== song._id));
    toast("Removed from stash");
  };

  const isInStash = stash.some((x) => x._id === song._id);

  return isInStash ? (
    <span role="img" onClick={remove}>
      📤
    </span>
  ) : (
    <span role="img" onClick={add}>
      📥
    </span>
  );
}

export default StashButton;
