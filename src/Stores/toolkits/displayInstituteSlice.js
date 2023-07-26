// apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const displayInstituteSlice = createSlice({
  name: 'getInstitute',
  initialState: {
    loading: false,
    error: null,
    data: [],
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
    deleteData: (state) => {
        state.loading = true;
        state.error = null;
      },
      deleteDataSuccess: (state) => {
        state.loading = false;
      },
      deleteDataFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  },
});

export const { fetchData, fetchDataSuccess, fetchDataFailure,deleteData,deleteDataSuccess ,deleteDataFailure} = displayInstituteSlice.actions;

export default displayInstituteSlice.reducer;
