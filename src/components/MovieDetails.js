import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import placeholderImage from '../assets/placeholder.jpg';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchMovieDetails(id);
                setMovie(data);
            } catch (error) {
                setError('Failed to fetch movie details.');
            }
        };

        getMovieDetails();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>{movie.title}</h1>
            <img
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : placeholderImage
                }
                alt={movie.title}
                style={{ width: '300px', borderRadius: '8px' }}
            />
            <p><strong>Release Date:</strong> {movie.release_date || 'N/A'}</p>
            <p><strong>Overview:</strong> {movie.overview || 'No description available.'}</p>
            <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ') || 'N/A'}</p>
        </div>
    );
};

export default MovieDetails;
