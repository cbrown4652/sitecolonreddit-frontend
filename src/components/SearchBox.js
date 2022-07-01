import React from "react";
import './SearchBox.css'


const SearchBox = ({searchChange, searchClick, enterPress}) => {
    return (
        <div>
            <input
                className="searchBox"
                type="search"
                placeholder="Search for reddit posts"
                onChange={searchChange}
                onKeyPress={enterPress}
            />
            <button className="searchButton" onClick={searchClick}>Search</button>
        </div>
    );
}

export default SearchBox;