import { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import CardHeader from "./CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/slices/moviesSlice";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  // const { movieId } = useParams();

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
  }, [movies]);

  const renderedMovies = Array.isArray(movies)
    ? movies.map((movie, i) => {
        return <DashboardCard movie={movie} key={i} />;
      })
    : null;
  return (
    <>
      <CardHeader title={"Dashboard"} />
      <section className={styles.card}>{renderedMovies}</section>
    </>
  );
};

export default Dashboard;
