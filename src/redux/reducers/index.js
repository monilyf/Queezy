import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import categorySlice from "./categorySlice";
import quizSlice from "./quizSlice";

export const reducers = combineReducers({
    auth: authSlice,
    category: categorySlice,
    quiz: quizSlice
}) 