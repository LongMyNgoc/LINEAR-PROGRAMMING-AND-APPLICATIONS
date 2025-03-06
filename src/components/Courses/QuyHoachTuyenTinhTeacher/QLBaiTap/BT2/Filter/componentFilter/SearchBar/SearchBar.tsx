import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => (
  <input
    type="text"
    placeholder="Thanh Tìm Kiếm..."
    value={searchTerm}
    onChange={(e) => onSearchChange(e.target.value)}
    className="search-input"
  />
);

export default SearchBar;
