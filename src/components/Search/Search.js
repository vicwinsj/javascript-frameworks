import React, { useState } from "react";
import { SearchInput } from "./SearchStyles";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <SearchInput
      type="text"
      placeholder="Search for product"
      value={query}
      onChange={handleChange}
    />
  );
};

export default Search;
