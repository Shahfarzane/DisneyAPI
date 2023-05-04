import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeName,
  changeDescription,
  changeGenre,
  changeImage,
  changeYear
} from "../store";
import styles from "./form.module.scss";

const Form = ({ movie, onSubmit, btnTextValue }) => {
  const dispatch = useDispatch();

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
    if (movie) {
      dispatch(changeName(movie.name));
      dispatch(changeYear(movie.year));
      dispatch(changeImage(movie.image));
      dispatch(changeGenre(movie.genre));
      dispatch(changeDescription(movie.description));
    } else {
      dispatch(changeName(""));
      dispatch(changeYear(""));
      dispatch(changeImage(""));
      dispatch(changeGenre(""));
      dispatch(changeDescription(""));
    }
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
    onSubmit(e, {
      id: movie ? movie.id : null,
      name,
      year,
      image,
      genre,
      description
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <div className={styles.cardHead}>
        <div className={styles.cardTitle}>Movie information</div>
      </div>
      <label className={styles.formLabel}>Movie Name</label>
      <input
        className={styles.formInput}
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <label className={styles.formLabel}>Year</label>
      <input
        className={styles.formInput}
        type="number"
        value={year || ""}
        onChange={handleYearChange}
      />

      <label className={styles.formLabel}>Cover Image URL</label>
      <input
        className={styles.formInput}
        type="text"
        onChange={handleImageChange}
        value={image}
      />
      <label className={styles.formLabel}>Description</label>
      <textarea
        rows={6}
        value={description}
        className={styles.textarea}
        onChange={handleDescriptionChange}
      />

      <label className={styles.formLabel}>Genre</label>
      <div className={styles.wrap}>
        <select
          name={genre}
          id="genre"
          className={[styles.select].join(" ")}
          value={genre}
          onChange={handleGenreChange}
        >
          <option className={styles.option}>Pick a Genre</option>
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
        <button className={styles.btn}>{btnTextValue}</button>
      </div>
    </form>
  );
};

export default Form;
