import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateMovie } from "../store/slices/moviesSlice";

const EditMovie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id.toString() === movieId)
  );
  const dispatch = useDispatch();

  const [name, setName] = useState(movie.name);
  const [genre, setGenre] = useState(movie.genre);
  const [year, setYear] = useState(movie.year);
  const [image, setImage] = useState(movie.image);
  const [description, setDescription] = useState(movie.description);

  useEffect(() => {
    setName(movie.name);
    setGenre(movie.genre);
    setYear(movie.year);
    setImage(movie.image);
    setDescription(movie.description);
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateMovie({
        id: movie.id,
        name,
        year,
        genre,
        image,
        description
      })
    );

    navigate("/main");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card__head">
        <div className="title">Movie information</div>
      </div>
      <label>Movie Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Year</label>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <label>Cover Image</label>
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <label>Description</label>
      <textarea
        rows={6}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="genre">Genre</label>
      <select
        name="genre"
        id="genre"
        className="select"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="Comedy">Comedy</option>
        <option value="Animation">Animation</option>
        <option value="Adventure">Adventure</option>
      </select>
      <button type="submit">Update Movie</button>
    </form>
  );
};

export default EditMovie;
