import React from "react";

import StashButton from "../stash-button/stash-button";
import "./song-row.scss";

function SongRow({ song, stash, setStash }) {
  const artist = `${song.artist}${song.featured ? `, ${song.featured}` : ""}`;

  const row = (
    <div className="song-item">
      <span className="song-artist">{artist}</span>
      <span> - </span>
      <span className="song-name">{song.name}</span>
      <SongButtonSection song={song} stash={stash} setStash={setStash} />
    </div>
  );

  return row;
}

function SongButtonSection({ song, stash, setStash }) {
  return (
    <div className="song-buttons">
      <StashButton song={song} stash={stash} setStash={setStash} />
    </div>
  );
}

export default SongRow;
