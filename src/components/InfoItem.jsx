import styles from "./InfoItem.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, updateMovie } from "../store";
import trashIcon from "../assets/trash.svg";
import editIcon from "../assets/edit.svg";
import Fav from "./Fav";
import AdminButtons from "./AdminButtons";

function InfoItem({ movie }) {
  if (!movie) {
    return null;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
    navigate("/main");
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
          <div className={styles.movieGenre}>
            <p>{movie.genre}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default InfoItem;
