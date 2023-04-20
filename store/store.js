import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";

export const store = configureStore({
    reducer: {
        movieReducer,
    },
});
