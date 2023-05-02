import styles from "./AdminButton.module.css";
import trashIcon from "../assets/trash.svg";
import editIcon from "../assets/edit.svg";
import fireFilled from "../assets/fire-filled.svg";
import fireOutline from "../assets/fire-outline.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList, removeFromWatchList } from "../store";

const AdminButtons = ({ movie, handleDelete }) => {
  const dispatch = useDispatch();

  const watchList = useSelector((state) => state.watchList.watchList);

  const isFavorite = watchList.some((favMovie) => favMovie.id === movie.id);

  const addToWatchListHandler = () => {
    dispatch(addToWatchList(movie));
  };
  const removeFromWatchListHandler = () => {
    dispatch(removeFromWatchList(movie.id));
  };

  const handleClick = () => {
    if (!isFavorite) {
      addToWatchListHandler();
    } else {
      removeFromWatchListHandler();
    }
  };

  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminButtons}>
        <img
          src={trashIcon}
          alt="delete"
          className={styles.icon}
          onClick={handleDelete}
        />
      </div>
      <div className={styles.adminButtons}>
        <Link to={`/edit/${movie.id}`}>
          <img src={editIcon} alt="edit" className={styles.icon} />
        </Link>
      </div>

      <div className={styles.adminButtons}>
        <img
          src={isFavorite ? fireFilled : fireOutline}
          alt="fire"
          className={styles.icon}
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};

export default AdminButtons;
