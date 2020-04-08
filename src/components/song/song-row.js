import React from "react";

import StashButton from "../stash-button/stash-button";
import "./song-row.scss";

function SongRow({ song }) {
  const artist = `${song.artist}${song.featured ? `, ${song.featured}` : ""}`;

  const row = (
    <>
      <div className="song-designation">
        <div className="song-artist">{artist}</div>
        <div className="song-name">{song.name}</div>
      </div>
      <SongButtonSection song={song} />
    </>
  );

  return row;
}

function SongButtonSection({ song }) {
  return (
    <div className="song-buttons">
      <StashButton song={song} />
    </div>
  );
}

export default SongRow;
