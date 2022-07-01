import React from "react";
import './LoadMoreButton.css'

const LoadMoreButton = ({loadMoreClick}) => {
    return (
        <button className="loadMore" onClick={loadMoreClick}>Load More</button>
    );
}

export default LoadMoreButton;