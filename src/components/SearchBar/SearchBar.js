import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onClear}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm); 
    setIsSearchClicked(true);
  };

  const handleClear = () => {
    setSearchTerm('');
    setIsSearchClicked(false);
    onClear();
  }

  return (
    <div className="search-bar-container">
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
      {isSearchClicked && (
        <button onClick={handleClear} className="clear-button">
          Clear Search
        </button>
      )}
    </div>
  );
};
export default SearchBar;
