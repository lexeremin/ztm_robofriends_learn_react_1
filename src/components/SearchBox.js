import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="text-center p-5 bg-teal-400">
      <input className="p-3 bg-teal-100 "
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
