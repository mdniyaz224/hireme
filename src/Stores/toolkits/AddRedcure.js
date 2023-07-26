// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './AddInstitutSlice';
const AddRedcure = combineReducers({
    institut: authReducer,
});

export default AddRedcure;
