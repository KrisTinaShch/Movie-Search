import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import placeholderImage from '../assets/placeholder.jpg';

const MovieList = ({ movies }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = (movieId) => favorites.some((fav) => fav.id === movieId);

    if (!movies || movies.length === 0) {
        return <p>No movies found.</p>;
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '4px',
                        width: '200px',
                    }}
                >
                    <Link to={`/movie/${movie.id}`}>
                        <img
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                    : placeholderImage
                            }
                            alt={movie.title}
                            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                        />
                        <h3 style={{ fontSize: '16px' }}>{movie.title}</h3>
                    </Link>
                    <p>{movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</p>
                    <button
                        onClick={() =>
                            isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie)
                        }
                        style={{
                            marginTop: '10px',
                            backgroundColor: isFavorite(movie.id) ? 'red' : 'green',
                            color: 'white',
                            border: 'none',
                            padding: '10px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        {isFavorite(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default MovieList;