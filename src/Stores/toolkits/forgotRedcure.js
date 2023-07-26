// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './forgotSlice';

const rootReducer = combineReducers({
    forgot: authReducer,
});

export default rootReducer;
