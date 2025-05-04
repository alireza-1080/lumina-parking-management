import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SlideNumber {
  value: number;
}

const initialState: SlideNumber = {
  value: 1,
};

const slideNumberSlice = createSlice({
  name: "SlideNumber",
  initialState,
  reducers: {
    slideIncrement: (state) => {
      state.value++;
    },
    slideDecrement: (state) => {
      state.value--;
    },
    slideReset: (state) => {
      state.value = 1
    },
    slideSet: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  },
});

export const { slideIncrement, slideDecrement, slideReset, slideSet } = slideNumberSlice.actions;

export default slideNumberSlice.reducer
