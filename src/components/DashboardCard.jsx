import styles from "./Dashboard.module.scss";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteMovie } from "../store";
import AdminButtons from "./AdminButtons";

const DashboardCard = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };
  return (
    <article className={styles.cardItemContainer}>
      <Link to={`/details/${movie.id}`} state={movie}>
        <div className={styles.cardRow}>
          <div className={styles.cardAvatarContainer}>
            <img src={movie.image} alt="arrow" />
          </div>
        </div>
      </Link>
      <div className={styles.cardRow}>
        <Link to={`/details/${movie.id}`} state={movie}>
          <h6 className={styles.cardItemTitle}>{movie.name}</h6>
          <p className={styles.cardItemDetails}>{movie.year}</p>
        </Link>
      </div>

      <div className={styles.adminRow}>
        <AdminButtons movie={movie} handleDelete={handleDelete} />
      </div>
    </article>
  );
};

export default DashboardCard;
