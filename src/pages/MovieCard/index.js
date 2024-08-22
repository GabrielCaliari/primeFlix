import React from 'react';
import "./movieCard.css"
import { Link } from 'react-router-dom';

const MovieCard = ({ filme }) => {
  return (
    <div className="movie-card">
       <Link to={`/filme/${filme.id}`}>
      <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
      <h3>{filme.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;


