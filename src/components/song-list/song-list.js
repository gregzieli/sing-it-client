import React from "react";
import { FixedSizeList as List } from "react-window";

import SongRow from "../song/song-row";

function SongList({ songs, stash, setStash }) {
  const Row = ({ index, style }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      <SongRow song={songs[index]} stash={stash} setStash={setStash} />
    </div>
  );

  return (
    <List
      className="song-list"
      height={window.innerHeight - 200}
      itemCount={songs.length}
      itemSize={40}
      width={"100%"}
    >
      {Row}
    </List>
  );
}

export default SongList;
