/* Core */
import { createSlice } from "@reduxjs/toolkit";

//State
export interface templateSliceState {
  theme: string;
}

const initialState: templateSliceState = {
  theme: "dark",
};

// Slice
export const themeSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    themeToggle: (state) => {
      state.theme = state.theme == "dark" ? "light" : "dark";
    },
  },
});
