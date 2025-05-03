import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ParkingDetails {
  carPlate: string;
  permitNumber: string;
}

const initialState: ParkingDetails = {
  carPlate: "",
  permitNumber: "",
};

const parkingDetailsSlice = createSlice({
  name: "ParkingDetails",
  initialState,
  reducers: {
    setCarPlate: (state, action: PayloadAction<string>) => {
      state.carPlate = action.payload;
    },
    setPermitNumber: (state, action: PayloadAction<string>) => {
      state.permitNumber = action.payload;
    },
    resetParkingDetails: (state) => {
      state.carPlate = "";
      state.permitNumber = "";
    },
  },
});

export const { setCarPlate, setPermitNumber, resetParkingDetails } = parkingDetailsSlice.actions;

export default parkingDetailsSlice.reducer;
