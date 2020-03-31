import React from "react";
import { toast } from "react-toastify";
import SongRow from "../song/song-row";
import "react-toastify/dist/ReactToastify.css";

function SongList({ songs, filterText, onStashAdd }) {
  const isMatch = song =>
    song.name.toLowerCase().indexOf(filterText) >= 0 ||
    song.artist.toLowerCase().indexOf(filterText) >= 0 ||
    (song.featured && song.featured.toLowerCase().indexOf(filterText) >= 0);

  const addToStash = song => {
    onStashAdd(stash => {
      if (!stash.some(x => x._id === song._id)) {
        toast("Added to stash");
        stash.push(song);
      }
      return stash;
    });
  };

  const rows = songs
    .filter(isMatch)
    .map(x => (
      <SongRow
        song={x}
        key={x._id}
        stashActionButton={<button onClick={() => addToStash(x)}>+</button>}
      />
    ));

  return <ul className="song-list">{rows}</ul>;
}

export default SongList;
