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
        <form onSubmit={handleSearch} className="flex space-x-2 mb-6">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-300"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
