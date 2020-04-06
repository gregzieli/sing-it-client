import React from "react";
import "./search-bar.scss"

function SearchBar({ filterText, onFilterTextChange }) {
  const handleFilterTextChange = (event) => {
    onFilterTextChange(event.target.value.toLowerCase());
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="input-search"
      value={filterText}
      onChange={handleFilterTextChange}
    />
  );
}

export default SearchBar;
