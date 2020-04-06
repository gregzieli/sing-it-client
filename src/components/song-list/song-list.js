import React from "react";
import { FixedSizeList as List } from "react-window";

import SongRow from "../song/song-row";

function SongList({ songs, stash, setStash }) {
  const Row = ({ index, style }) => (
    <div className={`song-item ${index % 2 ? "list-item-odd" : "list-item-even"}`} style={style}>
      <SongRow song={songs[index]} stash={stash} setStash={setStash} />
    </div>
  );

  return (
    <List
      className="song-list"
      height={window.innerHeight - 190}
      itemCount={songs.length}
      itemSize={50}
      width={"100%"}
    >
      {Row}
    </List>
  );
}

export default SongList;
