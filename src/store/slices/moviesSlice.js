import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await fetch(
    "https://mocki.io/v1/72895be2-d522-4a19-a096-f87c2c654a43"
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
      state.movies.push(action.payload);
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      const newMovies = action.payload.filter(
        (fetchedMovie) =>
          !state.movies.some(
            (existingMovie) => existingMovie.id === fetchedMovie.id
          )
      );

      state.movies = [...state.movies, ...newMovies];
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  }
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
