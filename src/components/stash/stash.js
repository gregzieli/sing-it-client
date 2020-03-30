import React from "react";
import SongRow from "../song/song-row";

function Stash({ stash, onStashUpdate }) {
  const updateStash = song => {
    onStashUpdate(stash => stash.filter(x => x._id !== song._id));
  };

  return (
    <ul className="song-list">
      {stash.map(x => (
        <SongRow song={x} key={x._id} onStashUpdate={() => updateStash(x)} />
      ))}
    </ul>
  );
}

export default Stash;
