import { createSlice } from "@reduxjs/toolkit";
import { deleteMovie } from "./moviesSlice";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchList: [],
    watchListItem: false
  },
  reducers: {
    addToWatchList: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.watchList.find(
        (movie) => movie.id === itemToAdd.id
      );
      if (!existingItem) {
        state.watchList.push(action.payload);
        state.watchListItem = true;
      }
    },

    removeFromWatchList: (state, action) => {
      state.watchList = state.watchList.filter(
        (item) => item.id !== action.payload
      );
      state.watchListItem = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(deleteMovie, (state, action) => {
      state.watchList = state.watchList.filter(
        (item) => item.id !== action.payload
      );
    });
  }
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
