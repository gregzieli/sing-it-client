import React from "react";
import SongList from "../song-list/song-list";
import StashContext from "../../contexts/stash-context";

function Stash() {
  const { stash, setStash } = React.useContext(StashContext);

  const clearAll = () => setStash([]);

  return (
    <div>
      {!!stash.length && (
        <button style={{ marginBottom: 10 }} onClick={clearAll}>
          Clear all
        </button>
      )}
      <SongList songs={stash} />
    </div>
  );
}

export default Stash;
