import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await fetch(
    "https://mocki.io/v1/f98f77f5-78b6-439b-88f0-aa86faf16a33"
  );

  const data = await response.json();
  return data.movies;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null
  },
  reducers: {
    addMovie: (state, action) => {
      console.log("Adding movie", action.payload);
      state.movies.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  }
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
