import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultList.css"
import "./SearchResult.css"

const SearchResultList = ({ searchResults }) => {
    return (
        <div className="searchResultList">
            {
                searchResults.map((result, i) => {
                    return (
                        <div className="searchResult" key={i}>
                            <SearchResult
                                key={i}
                                title={result.title}
                                link={result.link}
                                snippet={result.snippet}
                            />
                        </div>
                    )
                })

            }
        </div>
    );
}


export default SearchResultList;