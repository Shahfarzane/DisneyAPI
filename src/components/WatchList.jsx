import React from "react";
import styles from "./form.module.css";
import { useSelector } from "react-redux";
const WatchList = () => {
  const watchList = useSelector((state) => state.watchList.watchList);

  const renderedFavorites = watchList.map((movie, index) => (
    <article key={index} className={styles.ListAvatarContainer}>
      <div className={styles.ListItemAvatarContainer}>
        <img src={movie.image} alt={movie.name} />
      </div>
      <h6 className={styles.LisItemTitle}>{movie.name}</h6>
    </article>
  ));

  const empty = renderedFavorites.length === 0;

  return (
    <section className={styles.card}>
      <div className={styles.watchListContainer}>
        {empty ? (
          <h2>No Movies has been added to watch-list yet</h2>
        ) : (
          renderedFavorites
        )}
      </div>
    </section>
  );
};

export default WatchList;
