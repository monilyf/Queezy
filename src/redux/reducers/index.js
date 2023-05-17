import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './authSlice';

export const reducers = combineReducers({
    auth: authSlice,
}) 