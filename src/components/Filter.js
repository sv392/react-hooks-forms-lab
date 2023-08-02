import React, { useState, useEffect } from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  // Update the searchText state only when the search prop changes
  useEffect(() => {
    setSearchText(search || ""); // Set the default value to an empty string if search is falsy
  }, [search]);

  function handleSearchChange(event) {
    const value = event.target.value;
    setSearchText(value);
    onSearchChange(value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
