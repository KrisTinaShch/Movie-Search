import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/placeholder.jpg';

const MovieList = ({ movies }) => {
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
                </div>
            ))}
        </div>
    );
};

export default MovieList;