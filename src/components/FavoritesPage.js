import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import MovieList from './MovieList';

const FavoritesPage = () => {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return <p>No favorite movies added yet.</p>;
    }

    return <MovieList movies={favorites} />;
};

export default FavoritesPage;
