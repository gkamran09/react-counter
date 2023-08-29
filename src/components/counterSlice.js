import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counterList: [],
    },
    reducers: {
        updateSize: (state, action) => {
            state.counterList = new Array(action.payload).fill(0);
        },
        updateCount: (state, action) => {
            state.counterList = action.payload;
        },
    },
});

export const { updateSize, updateCount } = counterSlice.actions;
export default counterSlice.reducer;
