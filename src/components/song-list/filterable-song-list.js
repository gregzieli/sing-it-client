import React, { useState } from "react";

import SearchBar from "../song-filter/search-bar";
import SongList from "./song-list";

function FilterableSongList({ songs, stash, setStash }) {
  const [filterText, setFilterText] = useState("");

  const isMatch = (song) =>
    !filterText ||
    song.name.toLowerCase().indexOf(filterText) >= 0 ||
    song.artist.toLowerCase().indexOf(filterText) >= 0 ||
    (song.featured && song.featured.toLowerCase().indexOf(filterText) >= 0);

  return (
    <div>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <SongList
        songs={songs.filter(isMatch)}
        stash={stash}
        setStash={setStash}
      />
    </div>
  );
}

export default FilterableSongList;
