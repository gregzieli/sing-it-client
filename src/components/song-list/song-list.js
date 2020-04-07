import React from "react";
import { FixedSizeList as List } from "react-window";

import SongRow from "../song/song-row";

function SongList({ songs }) {
  const Row = ({ index, style }) => (
    <div
      className={`song-item ${index % 2 ? "list-item-odd" : "list-item-even"}`}
      style={style}
    >
      <SongRow song={songs[index]} />
    </div>
  );

  return (
    <List
      className="song-list"
      height={window.innerHeight - 170}
      itemCount={songs.length}
      itemSize={50}
      width={"100%"}
    >
      {Row}
    </List>
  );
}

export default SongList;
