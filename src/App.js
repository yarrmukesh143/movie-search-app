
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import TopBar from "./TopBar";
import Footer from "./Footer";

import Particle from "./react-tsparticles";

const API_KEY = "a1e1546b"; // 🔑 Replace this with your actual key
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function App() {
  const [searchTerm, setSearchTerm] = useState("batman");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="app">
        <Particle /> 
       <TopBar />  {/* <-- Add it here at the very top */}
      <h1>🎬 Movie Search</h1>

      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchMovies(searchTerm);
            }
          }}
        />
        <button onClick={() => searchMovies(searchTerm)}>🔍</button>
      </div>

      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
