import React from "react";
import FilterableSongList from "../song-list/filterable-song-list";

function Home({ songs, stash, onStashAdd }) {
  if (songs.length) {
    return <FilterableSongList songs={songs} stash={stash} onStashAdd={onStashAdd} />;
  }

  return <div>Loading...</div>
}

export default Home;
