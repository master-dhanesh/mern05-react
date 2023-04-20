import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
};

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
});

export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer;
