import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await axios.get("./db.json");

  return response.data.movies;
});

export { fetchMovies };
