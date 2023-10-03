import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userData: {
		name: "",
		bio: "",
		location: "",
		avatarUrl: "",
	},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, actions) => {
			state.userData = actions.payload;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
