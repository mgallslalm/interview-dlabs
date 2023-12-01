import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_POKEMON } from "../constants";

const initialState = {
  currentName: DEFAULT_POKEMON,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    currentName: (state, action) => {
      state.currentName = action.payload;
    },
  },
});

export const { currentName } = pokemonSlice.actions;
export default pokemonSlice.reducer;
