import React, { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [search, setSearch] = useState('');

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(search);
    }
    return (
        <form className="search-bar">
            <input 
                type="text"
                placeholder="search articles..."
                value={search}
                onChange={handleInputChange}
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    )
}

export default SearchBar;