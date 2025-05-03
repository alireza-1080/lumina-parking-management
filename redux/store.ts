import { configureStore } from "@reduxjs/toolkit";
import parkingDetailsReducer from "@/redux/slices/parkingDetailesSlice";
import slideNumberReducer from "@/redux/slices/slideNumberSlice"

const store = configureStore({
  reducer: {
    parkingDetails: parkingDetailsReducer,
    slideNumber: slideNumberReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
