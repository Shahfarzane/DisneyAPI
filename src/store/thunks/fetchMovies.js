import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const fetchMovies = createAsyncThunk("movies/fetch", async () => {
//   const response = await fetch(
//     "https://mocki.io/v1/c7972904-70e0-4b60-ba71-9315758dba85"
//   );
//   const data = await response.json();
//   return data.movies;
// });

const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await axios.get(
    "https://mocki.io/v1/c7972904-70e0-4b60-ba71-9315758dba85"
  );

  return response.data.movies;
});

export { fetchMovies };
