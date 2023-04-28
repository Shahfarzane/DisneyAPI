import styles from "./Card.module.css";
import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const handleOnClick = () => {
    <Link to={`/movies/${movie.id}`}></Link>;
  };
  return (
    <article className={styles.cardContainer}>
      <figure>
        <img src={movie.cover_image} alt={name} width="100px" />
        <figcaption>{movie.name}</figcaption>
      </figure>

      <div className={styles.cardInfo}>
        <p className={styles.movieYear}>{movie.year}</p>

        <PrimaryButton onClick={handleOnClick}>More</PrimaryButton>
      </div>
    </article>
  );
};

export default Card;
