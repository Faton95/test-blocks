import { createSlice } from "@reduxjs/toolkit";

type Square = {
  id: number;
  color: string;
};

const generateRandomColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

interface SheetState {
  squares: Square[];
}

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
