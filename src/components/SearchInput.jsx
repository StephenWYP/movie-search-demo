import React from 'react';

const SearchInput = ({ keyword, setKeyword, onSearch }) => {
    return (
        <div>
            <input
                type = "text"
                placeholder="Enter movie title or keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default SearchInput;