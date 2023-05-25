import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import categorySlice from "./categorySlice";

export const reducers = combineReducers({
    auth: authSlice,
    category: categorySlice
}) 