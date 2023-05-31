import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  quizData: [],
  correctAnswers: 0,
  incorrectAnswers: 0,
  skippedQuestions: 0,
  completionPercentage: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    updateQuizData: (state, action) => {
      const {id, question, selectedAnswer, option_array} = action.payload;
      const {option} = option_array.find(option => option.is_correct_answer);
      if (!selectedAnswer) {
        state.skippedQuestions = state.skippedQuestions + 1;
      } else if (option === selectedAnswer) {
        state.correctAnswers = state.correctAnswers + 1;
      } else {
        state.incorrectAnswers = state.incorrectAnswers + 1;
      }

      //   const obj = {id, question, selectedAnswer};
        state.quizData = [...state.quizData, action.payload];
      // const
    },
  },
});

export const {updateQuizData} = quizSlice.actions;

export default quizSlice.reducer;
