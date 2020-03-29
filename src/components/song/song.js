import React from "react";

const Song = ({ song }) => (
  <li className="song-item">
    <span className="song-artist">
      {song.artist}
      {song.featured ? `, ${song.featured}` : ""}
    </span>
    <span> - </span>
    <span className="song-name">{song.name}</span>
  </li>
);

export default Song;
