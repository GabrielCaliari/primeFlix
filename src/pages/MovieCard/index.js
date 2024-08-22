import React from 'react';
import "./movieCard.css"

const MovieCard = ({ filme }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
      <h3>{filme.title}</h3>
    </div>
  );
};

export default MovieCard;


