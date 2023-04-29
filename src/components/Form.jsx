import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store";
import "./form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      name,
      year,
      description,
      image
    };
    dispatch(addMovie(newMovie));
    setName("");
    setYear("");
    setImage("");
    navigate("/main");
  };
  return (
    <form onSubmit={handleSubmit} className="card">
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
      <button>Submit</button>
    </form>
  );
};

export default Form;
