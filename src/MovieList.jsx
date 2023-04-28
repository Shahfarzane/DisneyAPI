import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./store/slices/moviesSlice";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.name}>
          <h2>{movie.name}</h2>
          <p>Rating: {movie.rating}</p>
          <p>Year: {movie.year}</p>
          <img src={movie.cover_image} alt={movie.name} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
