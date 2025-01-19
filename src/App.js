import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/Searchbar';
import MovieList from './components/MovieList';
import { fetchMovies } from './api';

function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    const data = await fetchMovies(searchQuery, 1);
    if (data && data.results) {
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setPage(1); 
    } else {
      setMovies([]);
    }
  };

  const loadMore = async () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      const data = await fetchMovies(query, nextPage);
      if (data && data.results) {
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setPage(nextPage); 
      }
    }
  };


  return (
    <div className="App">
      <div style={{ padding: '20px' }}>
        <h1>Movie Search</h1>
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={movies} />
        {page < totalPages && (
          <button onClick={loadMore} style={{ marginTop: '20px' }}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
