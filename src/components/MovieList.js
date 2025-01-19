import React from 'react';

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
                    <img
                        src={movie.poster_path !== 'N/A' ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path : 'https://via.placeholder.com/150'}
                        alt={movie.title}
                        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                    />
                    <h3 style={{ fontSize: '16px' }}>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
