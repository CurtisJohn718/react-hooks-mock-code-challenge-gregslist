import React, { useState } from "react";

function Search({ onUpdateSearchTerm }) {
const [searchText, setSearchText] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateSearchTerm(searchText)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
