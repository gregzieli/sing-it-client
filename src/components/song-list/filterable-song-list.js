import React, { useState } from "react";

import SearchBar from "../song-filter/search-bar";
import SongList from "./song-list";

function FilterableSongList({ songs, stash, onStashAdd }) {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <SongList songs={songs} filterText={filterText} stash={stash} onStashAdd={onStashAdd} />
    </div>
  );
}

export default FilterableSongList;
