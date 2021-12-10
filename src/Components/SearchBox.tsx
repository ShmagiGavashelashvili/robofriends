import React from "react";

interface PropsFunc {
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

function SearchBox({ onSearchChange }: PropsFunc) {
  return (
    <div className="searchBox">
      <input type="text" onChange={onSearchChange} placeholder="search robots..." />
    </div>
  );
}

export default SearchBox;
