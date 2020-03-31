import React from "react";
import { toast } from "react-toastify";
import SongRow from "../song/song-row";
import "react-toastify/dist/ReactToastify.css";

function SongList({ songs, filterText, stash, onStashAdd }) {
  const isMatch = song =>
    song.name.toLowerCase().indexOf(filterText) >= 0 ||
    song.artist.toLowerCase().indexOf(filterText) >= 0 ||
    (song.featured && song.featured.toLowerCase().indexOf(filterText) >= 0);

  const addToStash = song => {
    toast("Added to stash");
    onStashAdd(stash => [...stash, song]);
  };

  const button = song =>
    stash.some(x => x._id === song._id) ? null : (
      <button onClick={() => addToStash(song)}>+</button>
    );

  const rows = songs
    .filter(isMatch)
    .map(x => <SongRow song={x} key={x._id} stashActionButton={button(x)} />);

  return <ul className="song-list">{rows}</ul>;
}

export default SongList;
