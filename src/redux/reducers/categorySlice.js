import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCategory: null,
};

export const categroySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
    },
});

export const {setCurrentCategory} = categroySlice.actions;

export default categroySlice.reducer;

