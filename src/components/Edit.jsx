import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMovie,
  changeName,
  changeDescription,
  changeGenre,
  changeImage,
  changeYear
} from "../store";
import styles from "./form.module.css";
// import styles from "./Form.module.sass";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ movie, onMovieUpdate }) => {
  const dispatch = useDispatch();
  // const { movieId } = useParams();
  const navigate = useNavigate();

  const { name, year, image, genre, description } = useSelector((state) => {
    return {
      name: state.form.name,
      year: state.form.year,
      image: state.form.image,
      genre: state.form.genre,
      description: state.form.description
    };
  });

  useEffect(() => {
    dispatch(changeName(movie.name));
    dispatch(changeYear(movie.year));
    dispatch(changeImage(movie.image));
    dispatch(changeGenre(movie.genre));
    dispatch(changeDescription(movie.description));
  }, [dispatch, movie]);

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleYearChange = (e) => {
    const movieYear = parseInt(e.target.value) || 0;
    dispatch(changeYear(movieYear));
  };

  const handleDescriptionChange = (e) => {
    dispatch(changeDescription(e.target.value));
  };
  const handleGenreChange = (e) => {
    dispatch(changeGenre(e.target.value));
  };
  const handleImageChange = (e) => {
    dispatch(changeImage(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onMovieUpdate({ id: movie.id, name, year, image, genre, description });
    navigate("/main");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <div className={styles.card__head}>
        <div className={styles.title}>Movie information</div>
      </div>
      <label className={styles.label}>Movie Name</label>
      <input
        className={styles.formInput}
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <label className={styles.label}>Year</label>
      <input
        className={styles.formInput}
        type="number"
        value={year || ""}
        onChange={handleYearChange}
      />

      <label className={styles.label}>Cover Image</label>
      <input
        className={styles.formInput}
        type="text"
        onChange={handleImageChange}
        value={image}
      />
      <label className={styles.label}>Description</label>
      <textarea
        rows={6}
        value={description}
        className={styles.textarea}
        onChange={handleDescriptionChange}
      />

      <label className={styles.label} htmlFor="genre">
        Genre
      </label>
      <div className={styles.wrap}>
        <select
          name="genre"
          id="genre"
          className={[styles.select, styles.minimal].join(" ")}
          value={genre}
          onChange={handleGenreChange}
        >
          <option value="Comedy" className={styles.option}>
            Comedy
          </option>
          <option value="Animation" className={styles.option}>
            Animation
          </option>
          <option value="Adventure" className={styles.option}>
            Adventure
          </option>
        </select>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Submit</button>
      </div>
    </form>
  );
};

export default Edit;
