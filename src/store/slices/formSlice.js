import { createSlice } from "@reduxjs/toolkit";
import { addMovie, updateMovie } from "./moviesSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    id: 0,
    name: "",
    image: "",
    year: 0,
    genre: "",
    description: ""
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeImage: (state, action) => {
      state.image = action.payload;
    },
    changeYear: (state, action) => {
      state.year = action.payload;
    },
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    changeDescription: (state, action) => {
      state.description = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(addMovie, (state, action) => {
      (state.name = ""),
        (state.description = ""),
        (state.year = 0),
        (state.image = ""),
        (state.genre = "");
    });

    builder.addCase(updateMovie, (state, action) => {
      (state.name = ""),
        (state.description = ""),
        (state.year = 0),
        (state.image = ""),
        (state.genre = "");
    });
  }
});

export const {
  changeName,
  changeDescription,
  changeGenre,
  changeImage,
  changeYear
} = formSlice.actions;

export default formSlice.reducer;
