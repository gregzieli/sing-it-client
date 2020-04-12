import React from "react";
import FilterableSongList from "../song-list/filterable-song-list";
import Loader from "../../setup/loader";

function Home({ songs }) {
  if (songs.length) {
    return <FilterableSongList songs={songs} />;
  }

  return <Loader />
}

export default Home;
