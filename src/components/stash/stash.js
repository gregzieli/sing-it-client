import React from "react";
import SongList from "../song-list/song-list";

function Stash({ stash, setStash }) {
  const clearAll = () => setStash([]);

  return (
    <div>
      {!!stash.length && <button style={{ marginBottom: 10 }} onClick={clearAll}>Clear all</button>}
      <SongList songs={stash} stash={stash} setStash={setStash} />
    </div>
  );
}

export default Stash;
