import React from "react";
import { toast } from "react-toastify";

function StashButton({ song, stash, setStash }) {
  const add = () => {
    setStash(stash => [...stash, song]);
    toast("Added to stash");
  };

  const remove = () => {
    setStash(stash => stash.filter(x => x._id !== song._id));
    toast("Removed from stash");
  };

  const isInStash = stash.some(x => x._id === song._id);

  return isInStash ? (
    <button onClick={remove}>-</button>
  ) : (
    <button onClick={add}>+</button>
  );
}

export default StashButton;