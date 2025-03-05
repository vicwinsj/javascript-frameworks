import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search for products ..."
      value={query}
      onChange={handleChange}
      style={{ padding: "8px", width: "100%", maxWidth: "300px" }}
    />
  );
};

export default SearchBar;
