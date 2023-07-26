import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './displayInstituteSlice';

const rootReducer = combineReducers({
    getInstitute: authReducer,
});

export default rootReducer;