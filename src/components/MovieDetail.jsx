import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { name } = useParams();
  const movies = useSelector((state) => {
    return state.movies.movies;
  });

  const movie = movies.find((movie) => movie.name === name);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <h2>{movie.name}</h2>
    </div>
  );
}

export default MovieDetail;
