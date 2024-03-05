import { createSlice } from "@reduxjs/toolkit";

const initialSnackstate = {
	title: null,
	message: null,
	open: false,
};

const SnackSlice = createSlice({
	name: "Snack",
	initialState: initialSnackstate,
	reducers: {
		setSnack(state, action) {
			const { message, title } = action.payload;
			return { message, title, open: true };
		},
		closeSnack(state, action) {
			return { ...initialSnackstate };
		},
	},
});

export const SnackActions = SnackSlice.actions;
export const SnackReducers = SnackSlice.reducer;