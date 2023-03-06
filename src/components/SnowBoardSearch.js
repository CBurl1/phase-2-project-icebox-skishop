import React from "react";

function Search({query, setQuery}) {
    function handleSearch(e) {
      setQuery(e.target.value)
    }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Snow Boards:</label>
      <input
        type="text"
        id="search"
        value={query}
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
