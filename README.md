# Movie Search App

A responsive web application built with React that allows users to search for movies, view detailed information about them, and save their favorite movies.

## Features

- **Search movies by title**: Search and display movies using the TMDB API.
- **Movie details**: View detailed information about a movie, including its title, plot, release date, and more.
- **Favorites management**: Add movies to a favorites list, which persists across page reloads using `localStorage`.
- **Responsive design**: Optimized for mobile and desktop devices.

## Instructions on How to Run the Project Locally

Follow these steps to set up and run the project locally on your machine:

### 1. Clone the Repository
Clone the repository from GitHub to your local machine:
``bash
git clone <repository-url>
 
### 2. Navigate to the Project Folder

Move into the project directory:
``bash
cd <project-folder>

### 3. Install Dependencies
Install all necessary packages:
``bash
npm install

### 4. Set Up Environment Variables
Create a .env file in the root directory and add your TMDB API key:
``bash
REACT_APP_MOVIE_API_KEY=your_tmdb_api_key

### 5. Start the Development Server
Start the application in development mode:
``bash
npm start
Open your browser and navigate to:
``bash
http://localhost:3000


## Assumptions and Decisions Made During Development
1. **API Integration**: Used TMDB API to fetch movie data due to its comprehensive dataset and free tier availability.
2. **State Management**: Implemented React's Context API for managing the favorites list.
3. **Styling**: Tailwind CSS was chosen for its utility-first approach, enabling fast and responsive styling.
4. **Persistence**: Favorites are stored in localStorage to ensure data is retained across sessions.
5. **Error Handling**: Handled API errors and empty states gracefully with user-friendly messages.

## Technologies Used
- **React**: For building user interfaces.
- **Tailwind CSS**: For responsive and modern styling.
- **React Router**: For navigation and routing between pages.
- **TMDB API**: For fetching movie data.
- **localStorage**: For persisting user's favorite movies.

## Project Structure
The project is structured as follows:
```text
src/
├── components/       # Reusable UI components
│   ├── SearchBar.js      # Search input component
│   ├── MovieList.js      # Component for displaying the list of movies
│   ├── MovieDetails.js   # Component for displaying movie details
│   ├── FavoritesPage.js  # Component for managing and viewing favorite movies
├── context/          # React Context for state management
│   └── FavoritesContext.js
├── api.js            # API helper functions for TMDB
├── App.js            # Main application logic
├── index.css         # Global styles including Tailwind setup
├── index.js          # Entry point for the application
└── assets/           # Static assets (e.g., placeholder images)
