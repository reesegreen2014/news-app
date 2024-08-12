import React from "react";

const SearchBar = () => {
    return (
        <form className="search-bar">
            <input 
                type="text"
                placeholder="search articles..."
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    )
}

export default SearchBar;