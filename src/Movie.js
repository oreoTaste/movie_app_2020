import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({title, summary, poster, year, genres}) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li className="genres_genre" key={index}>{genre}</li>
          ))}
        </ul>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  )
}

Movie.propType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;