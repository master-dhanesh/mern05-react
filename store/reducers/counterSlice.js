import { createSlice } from "@reduxjs/toolkit";
import {
    changeByParamsAction,
    decrementAction,
    incrementAction,
} from "../actions/counterActions";

const initialState = {
    value: 0,
    movies: null,
};

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: incrementAction,
        decrement: decrementAction,
        chnagevalue: changeByParamsAction,
    },
});

export const { decrement, increment, chnagevalue } = CounterSlice.actions;
export default CounterSlice.reducer;
