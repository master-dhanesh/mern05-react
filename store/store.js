import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers";

export const store = configureStore({
    reducer: {
        counterReducer,
    },
});
