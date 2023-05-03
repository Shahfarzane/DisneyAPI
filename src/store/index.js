import { configureStore } from "@reduxjs/toolkit";
import moviesReducer, {
  createMovie,
  updateMovie,
  deleteMovie
} from "./slices/moviesSlice";
import formReducer, {
  changeDescription,
  changeGenre,
  changeName,
  changeYear,
  changeImage
} from "./slices/formSlice";

import watchListReducer, {
  addToWatchList,
  removeFromWatchList
} from "./slices/watchListSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    form: formReducer,
    watchList: watchListReducer
  }
});

export {
  createMovie,
  updateMovie,
  deleteMovie,
  changeDescription,
  changeGenre,
  changeName,
  changeYear,
  changeImage,
  addToWatchList,
  removeFromWatchList
};

export * from "./thunks/fetchMovies";

export default store;
