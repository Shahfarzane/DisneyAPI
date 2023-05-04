import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ movie }) => {
  const tagColors = {
    comedy: "#D0F95E",
    adventure: "#BFB3F0",
    animation: "#89E0D1"
  };
  const tagColor = tagColors[movie.genre.toLowerCase()];

  return (
    <article className={[styles.card, styles.movieItem].join(" ")}>
      <Link to={`/details/${movie.id}`} state={movie}>
        <div className={styles.cardContainer}>
          <div className={styles.movieCover}>
            <img src={movie.image} alt={movie.name} />
            <div className={styles.movieName}>{movie.name}</div>
          </div>
        </div>
      </Link>

      <div>
        <Link to={`/details/${movie.id}`} state={movie}>
          <div className={styles.cardRow}>
            <h4>{movie.name}</h4>
            <p className={styles.movieYear}>{movie.year}</p>
            <p
              className={styles.movieGenre}
              style={{ backgroundColor: tagColor }}
            >
              {movie.genre}
            </p>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Card;
