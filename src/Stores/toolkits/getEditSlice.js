// apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const displayInstituteSlice = createSlice({
  name: 'getEditInstitute',
  initialState: {
    loading: false,
    error: null,
    data: {},
  },
  reducers: {
    fetchData: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.data)
    },
   
  },
});

export const { fetchData, fetchDataSuccess, fetchDataFailure} = displayInstituteSlice.actions;

export default displayInstituteSlice.reducer;
