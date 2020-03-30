import React from "react";
import FilterableSongList from "../song-list/filterable-song-list";

function Home({ songs, onStashAdd }) {
  if (songs.length) {
    return <FilterableSongList songs={songs} onStashAdd={onStashAdd} />;
  }

  return <div>Loading...</div>
}

export default Home;
