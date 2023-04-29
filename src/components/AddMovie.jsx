import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/index";
import { useNavigate } from "react-router-dom";
const AddMovie = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      name,
      description
    };

    dispatch(addMovie(newMovie));
    setName("");
    setDescription("");
    navigate("/main");
  };

  return (
    <div>
      <h2>Add a new movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
