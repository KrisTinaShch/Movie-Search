import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { useFavorites } from '../context/FavoritesContext'; 
import placeholderImage from '../assets/placeholder.jpg';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const { favorites, addFavorite, removeFavorite } = useFavorites();

    useEffect(() => {
        const getMovieDetails = async () => {
            setLoading(true);
            const data = await fetchMovieDetails(id);
            setMovie(data);
            setLoading(false);
        };

        getMovieDetails();
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (!movie) {
        return <p className="text-center text-red-500">Movie not found.</p>;
    }

    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
            <img
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : placeholderImage
                }
                alt={movie.title}
                className="w-48 h-72 mx-auto mb-4 rounded"
            />
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="text-gray-700 mb-2">
                <strong>Release Date:</strong> {movie.release_date || 'N/A'}
            </p>
            <p className="text-gray-700">
                <strong>Overview:</strong> {movie.overview || 'No description available.'}
            </p>

            {}
            <button
                onClick={() =>
                    isFavorite ? removeFavorite(movie.id) : addFavorite(movie)
                }
                className={`mt-4 px-4 py-2 rounded text-white ${
                    isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                }`}
            >
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export default MovieDetails;
