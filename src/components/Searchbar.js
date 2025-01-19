import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query); 
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..."
                style={{
                    padding: '10px',
                    width: '300px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />
            <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
                Search
            </button>
        </form>
    );
};

export default SearchBar;
