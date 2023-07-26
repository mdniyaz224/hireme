// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './resetSlice';

const rootReducer = combineReducers({
    reset: authReducer,
});

export default rootReducer;
