import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  questionArray: [],
  currentQuestion: {},
  newQuestionArray: [],
};

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      const index = state.newQuestionArray.findIndex(
        question => question.id === action.payload.id,
      );
      if (index > -1) {
        state.newQuestionArray[[index]] = action.payload;
      } else {
        state.newQuestionArray = [...state.newQuestionArray, action.payload];
      }
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = {...action.payload};
    },
    saveAllQuestions: (state, action) => {
      state.questionArray = [...state.questionArray, ...state.newQuestionArray];
    },
  },
});

export const {addQuestion, setCurrentQuestion} = questionSlice.actions;

export default questionSlice.reducer;
