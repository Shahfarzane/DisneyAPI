import styles from "./MovieEntity.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../store";
import AdminButtons from "./AdminButtons";

function MovieEntity({ movie }) {
  const tagColors = {
    comedy: "#D0F95E",
    adventure: "#BFB3F0",
    animation: "#89E0D1"
  };
  const tagColor = tagColors[movie.genre.toLowerCase()];

  if (!movie) {
    return null;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
    navigate("/");
  };

  return (
    <div>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(${movie.image})`
        }}
      >
        <AdminButtons movie={movie} handleDelete={handleDelete} />
      </div>

      <div className={styles.movieDetails}>
        <div className={styles.detailsList}>
          <div className={styles.detailsText}>
            <h2>{movie.name}</h2>
          </div>
          <div className={styles.detailsTitle}>
            <h4>{movie.year}</h4>
          </div>
        </div>
      </div>

      <article className={styles.movieDetails}>
        <h5 className={styles.labels}>Description</h5>
        <div className={styles.movieContent}>{movie.description}</div>
        <div className={styles.genreContainer}>
          <div
            className={styles.movieGenre}
            style={{ backgroundColor: tagColor }}
          >
            <p>{movie.genre}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MovieEntity;
