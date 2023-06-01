import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questionArray: [],
};

export const questionSlice = createSlice({
    name:'questions',
    initialState,
    reducers:{
        addQuestion: (state, action) => {
            state.questionArray = [...state.questionArray, action.payload]
        },
    },
});

export const {addQuestion} = questionSlice.actions;

export default questionSlice.reducer;

