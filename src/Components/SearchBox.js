import React from "react";

function SearchBox({ onSearchChange }) {
  return (
    <div className="searchBox">
      <input type="text" onChange={onSearchChange} placeholder="search robots..." />
    </div>
  );
}

export default SearchBox;
