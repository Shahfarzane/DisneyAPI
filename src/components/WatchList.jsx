import React from "react";
import styles from "./WatchList.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const WatchList = () => {
  const watchList = useSelector((state) => state.watchList.watchList);

  const renderedFavorites = watchList.map((movie, index) => (
    <article key={index} className={styles.ListAvatarContainer}>
      <div className={styles.ListItemAvatarContainer}>
        <Link to={`/details/${movie.id}`} state={movie}>
          <img src={movie.image} alt={movie.name} />
        </Link>
      </div>
    </article>
  ));

  const empty = renderedFavorites.length === 0;

  return (
    <section className={styles.watchListCard}>
      <div className={styles.watchListContainer}>
        {empty ? (
          <h2>No Movies has been added to Top List</h2>
        ) : (
          renderedFavorites
        )}
      </div>
    </section>
  );
};

export default WatchList;
