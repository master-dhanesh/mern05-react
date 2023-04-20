import axios from "axios";
import { getMovies } from "../reducers/movieReducer";

export const getMoviesAsyncAction = () => async (dispatch, getState) => {
    console.log("GETSTATE >>>>", getState());
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`
    );
    dispatch(getMovies(data.results));
};
