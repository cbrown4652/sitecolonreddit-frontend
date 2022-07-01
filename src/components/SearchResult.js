import React from "react";
import "./SearchResult.css"

const SearchResult = ({ id, title, link, snippet }) => {
    return (
        <div>
            <div>
                <a className="link" href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                <p>{snippet}</p>
            </div>
        </div>
    )
}

export default SearchResult;