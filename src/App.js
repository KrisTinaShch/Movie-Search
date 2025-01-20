import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchBar from './components/Searchbar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import FavoritesPage from './components/FavoritesPage';
import { fetchMovies } from './api';
import { FavoritesProvider } from './context/FavoritesContext';

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
        <FavoritesProvider>
            <Router>
                <header className="bg-gray-800 text-white py-4">
                    <div className="container mx-auto flex justify-between items-center px-4">
                        <h1 className="text-xl font-bold">Movie Search App</h1>
                        <nav className="space-x-4">
                            <Link to="/" className="hover:underline">Home</Link>
                            <Link to="/favorites" className="hover:underline">Favorites</Link>
                        </nav>
                    </div>
                </header>
                <main className="container mx-auto px-4 py-6">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <SearchBar onSearch={handleSearch} />
                                    <MovieList movies={movies} />
                                    {page < totalPages && (
                                        <button
                                            onClick={loadMore}
                                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                                        >
                                            Load More
                                        </button>
                                    )}
                                </>
                            }
                        />
                        <Route path="/movie/:id" element={<MovieDetails />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Routes>
                </main>
            </Router>
        </FavoritesProvider>
    );
}

export default App;
