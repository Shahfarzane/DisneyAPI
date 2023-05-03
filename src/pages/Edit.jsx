import React, { useEffect, useState } from "react";
// import EditMovie from "../components/EditMovie";
// import Edit from "../components/Edit";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateMovie } from "../store";
import MainForm from "../components/MainForm";

const EditPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id.toString() === movieId)
  );

  const handleSubmit = (e, updatedMovie) => {
    e.preventDefault();
    dispatch(updateMovie(updatedMovie));
    navigate(`/info/${updatedMovie.id}`);
  };

  return (
    <div>
      <MainForm movie={movie} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPage;
