import { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import CardHeader from "./CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { movies, status, error } = useSelector((state) => {
    return state.movies;
  });
  const [moviesUpdate, setMoviesUpdate] = useState(false);
  const reFetchMovies = () => setMoviesUpdate(!moviesUpdate);

  useEffect(() => {
    if (status === "idle") dispatch(fetchMovies());
  }, [dispatch, status]);

  useEffect(() => {
    reFetchMovies();
  }, [movies]);

  const renderedMovies = Array.isArray(movies)
    ? movies.map((movie, i) => {
        return <DashboardCard movie={movie} key={i} />;
      })
    : null;
  return (
    <>
      <CardHeader title={"Dashboard"} btnText={"Home"} />
      <section className={styles.card}>{renderedMovies}</section>
    </>
  );
};

export default Dashboard;
