import React from "react";
import './SearchBox.css'


const SearchBox = ({searchChange, searchClick, enterPress}) => {
    return (
        <div id="cover">
            <div className="tb">
                <div className="td">
                    <input
                        type="search"
                        required
                        onChange={searchChange}
                        onKeyPress={enterPress}
                    />
                </div>
                <div className="td" id="s-cover">
                    <button type="submit" onClick={searchClick}>
                    <div id="s-circle"></div>
                    <span></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;