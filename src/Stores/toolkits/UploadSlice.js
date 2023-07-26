// addSlice.js
import { createSlice } from '@reduxjs/toolkit';
// import { useNavigate } from "react-router-dom";
const AddInstitutSlice = createSlice({
  name: 'institute',
  initialState: {
    loading: false,
    error: null,
    institutData:{}
  },
  
  reducers: {
    addInstuite: (state, action) => {
      state.institutData = action.payload;
      console.log("action>>>>>>>>>>>>>>>>",  state.institutData);
    },
    addInstuiteSuccess: (state) => {
      state.loading = false;
  
    },
    addInstuiteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addInstuite, addInstuiteSuccess, addInstuiteFailure } = AddInstitutSlice.actions;

export default AddInstitutSlice.reducer;
