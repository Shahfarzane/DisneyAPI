import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMovies } from "../store/slices/moviesSlice";
import Card from "./Card";
import styles from "./Movies.module.css";
import { Link } from "react-router-dom";

const MoviesSection = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => {
    return state.movies;
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "failed") {
    return <div>Error Fetching data..{error}</div>;
  }

  const renderedMovies = [...movies].map((movie, i) => {
    return (
      <Link to={`/info/`} state={movie} key={i}>
        <Card movie={movie} key={i} />
      </Link>
    );
  });

  return <div className={styles.moviesContainer}>{renderedMovies}</div>;
};

export default MoviesSection;
