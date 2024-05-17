import { configureStore } from "@reduxjs/toolkit";
import { gameApi } from "../features/pastries";
import { userApi } from "../features/user";
import { pastriesApi } from "../features/crud";
import { authApi } from "../features/auth";

export const store = configureStore({
	reducer: {
		[gameApi.reducerPath] : gameApi.reducer,
		[userApi.reducerPath] : userApi.reducer,
		[pastriesApi.reducerPath] : pastriesApi.reducer,
		[authApi.reducerPath] : authApi.reducer,
	},
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(gameApi.middleware, userApi.middleware, pastriesApi.middleware, authApi.middleware),
});
