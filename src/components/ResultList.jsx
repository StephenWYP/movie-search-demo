import React from 'react';

const ResultList = ({ results }) => {
    return (
        <div>
            <h3>Search Results:</h3>
            <ul>
                {results.map((movie, index) => (
                    <li key={index}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResultList;
