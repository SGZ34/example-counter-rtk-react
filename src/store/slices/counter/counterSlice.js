import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 10,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    IncrementBy: (state, action = 1) => {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement, IncrementBy } = counterSlice.actions;
