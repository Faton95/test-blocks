import { createSlice } from "@reduxjs/toolkit";

import { generateRandomColor } from "../utils/utils";
import { SheetState, Square } from "./types";

const initialState: SheetState = {
  squares: [],
};

export const sheetSlice = createSlice({
  name: "sheet",
  initialState,
  reducers: {
    addSquare: (state) => {
      const newSquare: Square = {
        id: Date.now(),
        color: generateRandomColor(),
      };
      state.squares.unshift(newSquare);
    },
    deleteSquare: (state) => {
      state.squares.pop();
    },
  },
});

export const { addSquare, deleteSquare } = sheetSlice.actions;

export default sheetSlice.reducer;
