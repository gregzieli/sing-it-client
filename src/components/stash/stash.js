import React from "react";
import SongList from "../song-list/song-list";
import StashContext from "../../context/stash-context";

function Stash() {
  const { stash, setStash } = React.useContext(StashContext);

  const clearAll = () => setStash([]);

  if (!stash.length) {
    return (
      <div>
        Wow, such empty{" "}
        <span role="img" aria-label="sad face">
          ☹️
        </span>
      </div>
    );
  }

  return (
    <>
      <button style={{ marginBottom: 10 }} onClick={clearAll}>
        Clear all
      </button>
      <SongList songs={stash} />
    </>
  );
}

export default Stash;
