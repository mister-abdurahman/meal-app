import { createSlice } from "@reduxjs/toolkit";

export interface initialStateProps {
  ids: string[];
}

const initialState: initialStateProps = {
  ids: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourites: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavourites, removeFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
