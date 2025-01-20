import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import placeholderImage from '../assets/placeholder.jpg';

const MovieList = ({ movies }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = (movieId) => favorites.some((fav) => fav.id === movieId);

    if (!movies || movies.length === 0) {
        return <p className="text-gray-600">No movies found.</p>;
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="border rounded shadow-md overflow-hidden flex flex-col"
                >
                    <Link to={`/movie/${movie.id}`}>
                        <img
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                    : placeholderImage
                            }
                            alt={movie.title}
                            className="w-full h-60 object-cover"
                        />
                    </Link>
                    <div className="p-4 flex-grow">
                        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                        <p className="text-sm text-gray-500">
                            {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                        </p>
                    </div>
                    <button
                        onClick={() =>
                            isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie)
                        }
                        className={`w-full py-2 text-white ${
                            isFavorite(movie.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                    >
                        {isFavorite(movie.id) ? 'Remove' : 'Add'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
