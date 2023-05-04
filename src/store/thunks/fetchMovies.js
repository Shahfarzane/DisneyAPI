import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await axios.get(
    "https://mocki.io/v1/c5651413-01c7-4af6-8e33-2f2fd508caae"
  );

  return response.data.movies;
});

export { fetchMovies };
