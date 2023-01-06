import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
	name: "bookBuffet",
	initialState: {
		meal: "",
		email: "",
		platecount: 0,
		bookingDate: "",
	},
	reducers: {
		handleEvent: (state, { payload }) => {
			console.log({ payload });
			state[payload.key] = payload.value;
		}
	},
});

export const { handleEvent } = bookingSlice.actions;

export default bookingSlice.reducer;
