import styles from "./Add.module.css";
import arrowIcon from "../assets/arrow.svg";
import MainForm from "../components/MainForm";
import { addMovie } from "../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e, newMovie) => {
    e.preventDefault();
    dispatch(addMovie(newMovie));
    navigate("/main");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <h3 className={styles.title}>Add New Movie</h3>
        </div>
        <a href="/" className={styles.buttonSmall}>
          <img src={arrowIcon} alt="back button" className={styles.icon} />
          BACK
        </a>
      </div>

      <MainForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Add;
