import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await fetch(
    "https://mocki.io/v1/c7972904-70e0-4b60-ba71-9315758dba85"
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
      state.movies.unshift({
        id: nanoid(),
        name: action.payload.name,
        image: action.payload.image,
        year: action.payload.year,
        genre: action.payload.genre,
        description: action.payload.description
      });
    },
    updateMovie: (state, action) => {
      const { id, name, image, year, genre, description } = action.payload;
      const existingMovie = state.movies.find((movie) => movie.id === id);
      if (existingMovie) {
        existingMovie.name = name;
        existingMovie.image = image;
        existingMovie.year = year;
        existingMovie.genre = genre;
        existingMovie.description = description;
      }
    },
    deleteMovie: (state, action) => {
      const movieId = action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== movieId);
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

export const { addMovie, updateMovie, deleteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
