// src/components/Search.tsx
import React, { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Gọi hàm onSearch khi thay đổi giá trị tìm kiếm
  };

  return (
    <>
    <div className="search-container-student">
      <input
        type="text"
        className="search-input-student"
        value={query}
        onChange={handleSearch}
        placeholder="Tìm kiếm sinh viên..."
      />
    </div>
    </>
  );
};

export default Search;
