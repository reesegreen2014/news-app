import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm); 
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
