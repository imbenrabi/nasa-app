import React from 'react';
import MediaCard from './MediaCard';
import SearchBar from './SearchBar';

function Search(props) {
    return (
        <div>
            <SearchBar />
            <MediaCard />
        </div>
    );
}

export default Search;