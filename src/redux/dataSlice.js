import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    regisData: null
};

export const dataSlice = createSlice({
    name: "dataReducer",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setRegister: (state, action) => {
            state.regisData = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { setName, setRegister } = dataSlice.actions;

export default dataSlice.reducer;