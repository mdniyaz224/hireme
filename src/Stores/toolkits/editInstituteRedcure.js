import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './editInstitutSlice';

const rootReducer = combineReducers({
    editInstitute: authReducer,
});

export default rootReducer;