import { configureStore } from "@reduxjs/toolkit";
import moviesReducer, { addMovie } from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});

export { addMovie };

export default store;
