const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export const fetchMovies = async (query, page = 1) => {
  try {
    const response   = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

