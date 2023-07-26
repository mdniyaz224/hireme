import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './getEditSlice';

const rootReducer = combineReducers({
    getEditInstitute: authReducer,
});

export default rootReducer;