import React from "react";
import SongRow from "../song/song-row";

function Stash({ stash, onStashUpdate }) {
  const removeFromStash = song => {
    onStashUpdate(stash => stash.filter(x => x._id !== song._id));
  };

  return (
    <ul className="song-list">
      {stash.map(x => (
        <SongRow
          song={x}
          key={x._id}
          stashActionButton={
            <button onClick={() => removeFromStash(x)}>-</button>
          }
        />
      ))}
    </ul>
  );
}

export default Stash;
