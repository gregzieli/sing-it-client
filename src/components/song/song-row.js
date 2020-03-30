import React from "react";
import "./song-row.scss";

function SongRow({ song, onStashUpdate }) {
  const artist = `${song.artist}${song.featured ? `, ${song.featured}` : ""}`;

  return (
    <li className="song-item">
      <span className="song-artist">{artist}</span>
      <span> - </span>
      <span className="song-name">{song.name}</span>
      <button onClick={onStashUpdate}>+</button>
    </li>
  );
}

export default SongRow;
