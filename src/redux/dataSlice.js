import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ''
};

export const dataSlice = createSlice({
    name: "dataReducer",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { setName } = dataSlice.actions;

export default dataSlice.reducer;