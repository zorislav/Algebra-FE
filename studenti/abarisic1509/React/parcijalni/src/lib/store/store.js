import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/userSlice";

export default configureStore({
	reducer: {
		user: UserReducer,
	},
});
