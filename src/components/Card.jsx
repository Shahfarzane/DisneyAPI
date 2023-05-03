import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ movie }) => {
  return (
    <article className={styles.card}>
      <Link to={`/details/${movie.id}`} state={movie}>
        <div className={styles.cardContainer}>
          <div className={styles.movieCover}>
            <img src={movie.image} alt={movie.name} />
          </div>
        </div>
      </Link>

      <div className={styles.cardRow}>
        <Link to={`/details/${movie.id}`} state={movie}>
          <h3 className={styles.collections__subtitle}>{movie.name}</h3>
          <p className={styles.movieYear}>{movie.year}</p>
          <p className={styles.movieGenre}>{movie.genre}</p>
        </Link>
      </div>
    </article>
  );
};

export default Card;
