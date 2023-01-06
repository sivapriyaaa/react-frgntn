import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice";

export default configureStore({
  reducer: {
    bookBuffet: bookingReducer,
  },
});
