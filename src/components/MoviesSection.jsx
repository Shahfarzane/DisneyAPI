import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/slices/moviesSlice";
import Card from "./Card";
import styles from "./Movies.module.css";
import { Link } from "react-router-dom";

const MoviesSection = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => {
    return state.movies;
  });
  const [moviesUpdate, setMoviesUpdate] = useState(false); // Add this line
  const forceUpdate = () => setMoviesUpdate(!moviesUpdate);

  useEffect(() => {
    if (status === "idle") dispatch(fetchMovies());
    console.log(status);
  }, [dispatch, status]);

  useEffect(() => {
    forceUpdate();
  }, [movies]); // Add this line

  const renderedMovies = Array.isArray(movies)
    ? movies.map((movie, i) => {
        return (
          <Link to={`/info/`} state={movie} key={i}>
            <Card movie={movie} key={i} />
          </Link>
        );
      })
    : null;
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "failed") {
    return <div>Error Fetching data..{error}</div>;
  }

  return <div className={styles.moviesContainer}>{renderedMovies}</div>;
};

export default MoviesSection;
