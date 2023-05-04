import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store";
import Card from "./Card";
import styles from "./Movies.module.scss";
import { Loading } from "./Loading";
import Error from "./Error";

const Movies = () => {
  const dispatch = useDispatch();

  const { movies, status, error } = useSelector((state) => {
    return state.movies;
  });
  const [moviesUpdate, setMoviesUpdate] = useState(false);
  const reFetchMovies = () => setMoviesUpdate(!moviesUpdate);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  useEffect(() => {
    reFetchMovies();
  }, [movies]);

  const renderedMovies = Array.isArray(movies)
    ? movies.map((movie, i) => {
        return <Card movie={movie} key={i} />;
      })
    : null;

  const empty = movies.length === 0;
  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") {
    return <Error error={error} />;
  }

  return (
    <div className={styles.moviesContainer}>
      {" "}
      {empty ? <h2>There are no movies.</h2> : renderedMovies}
    </div>
  );
};

export default Movies;
