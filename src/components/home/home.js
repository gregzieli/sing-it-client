import React from "react";
import FilterableSongList from "../song-list/filterable-song-list";

function Home({ songs }) {
  if (songs.length) {
    return <FilterableSongList songs={songs} />;
  }

  return <div>Loading...</div>
}

export default Home;
