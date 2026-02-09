import React from 'react';
import "./movieCard.css"
import { Link } from 'react-router-dom';

const MovieCard = ({ filme }) => {
  return (
    <div className="movie-card">
      <Link to={`/filme/${filme.id}`}>
        <div className="poster-wrap">
          <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title} />
          <div className="poster-overlay" aria-hidden="true" />
        </div>
        <div className="title-wrap">
          <h3>{filme.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;


