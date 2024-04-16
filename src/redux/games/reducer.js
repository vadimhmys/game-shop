import { createSlice } from "@reduxjs/toolkit";

const GamesSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: null
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    }
  }
});

export const { setCurrentGame } = GamesSlice.actions;
export default GamesSlice.reducer;