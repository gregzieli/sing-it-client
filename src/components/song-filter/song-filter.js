import React from "react";

const SongFilter = ({ searchText, updateSearch }) => (
  <input
    type="text"
    placeholder="Search a song..."
    className="input-search"
    onChange={event => handleChange(event, updateSearch)} 
    value={searchText}
  />
);

const handleChange = (event, callback) => {
  callback(event.target.value);
};

export default SongFilter;
