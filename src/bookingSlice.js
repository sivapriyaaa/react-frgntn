import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
	name: "bookBuffet",
	initialState: {
		bookings:[],
		meal: "",
		email: "",
		platecount: 0,
		bookingDate: "",
	},
	reducers: {
		handleEvent: (state, { payload }) => {
			console.log({ payload });
			state[payload.key] = payload.value;
		},
		handleSubmit: (state, {payload}) => {
			state['bookings'] = [...state.bookings, payload]
			
		}
	},
});

export const { handleEvent, handleSubmit } = bookingSlice.actions;

export default bookingSlice.reducer;
