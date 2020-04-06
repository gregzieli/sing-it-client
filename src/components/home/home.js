import React from "react";
import FilterableSongList from "../song-list/filterable-song-list";

function Home({ songs, stash, setStash }) {
  if (songs.length) {
    return <FilterableSongList songs={songs} stash={stash} setStash={setStash} />;
  }

  return <div>Loading...</div>
}

export default Home;
