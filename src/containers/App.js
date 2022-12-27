import React, { useState } from 'react';
import LoadMoreButton from '../components/LoadMoreButton';
import SearchBox from '../components/SearchBox';
import SearchResultList from '../components/SearchResultList';
import './App.css';
import '../components/SearchBox.css'
import '../components/SearchResultList.css'
import '../components/LoadMoreButton.css'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');
  const [page, setPage] = useState(0);

  const onSearchChange = (event) => {
    setSearchTerms(event.target.value);
    setPage(0);
  }

  const onSearchClick = (event) => {
    fetch("https://sitecolonreddit-backend.onrender.com/search", {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
          searchTerms: searchTerms,
          start: "1"
      })
    })
    .then(res => res.json())
    .then(data => {
      setSearchResults(data);
      setPage(page + 1);
    });
  }

  const onKeyPress = (event) => {
    var code = event.keyCode || event.which;
    if(code === 13) {
        onSearchClick();
    }
  }

  const onLoadMoreClick = (event) => {
    var startIndex = (page * 10) + 1;

    fetch("https://sitecolonreddit-backend.onrender.com/search", {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
          searchTerms: searchTerms,
          start: startIndex.toString()
      })
    })
    .then(res => res.json())
    .then(data => {
      setSearchResults(searchResults.concat(data));
      setPage(page + 1);
    });
  }

  return (
    <div>
        <h1 className='title center'>sitecolonreddit</h1>
        <div className='searchBar'>
          <SearchBox searchChange={onSearchChange} searchClick={onSearchClick} enterPress={onKeyPress}/>
        </div>
        <div className='center'>
          <SearchResultList searchResults={searchResults}/>
        </div>
        {page > 0 &&
          <div className='center'>
          <LoadMoreButton loadMoreClick={onLoadMoreClick}/>
          </div>
        }
    </div>
  );
}

export default App;
