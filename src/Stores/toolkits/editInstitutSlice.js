// editSlice.js
import { createSlice } from '@reduxjs/toolkit';

const editSlice = createSlice({
  name: 'editInstitute',
  initialState: {
    loading: false,
    error: null,
    editData: null,
    editid: '',
  },
  reducers: {
    startEdit: (state) => {
      state.loading = true;
      state.error = null;
    },
    editSuccess: (state, action) => {
      state.loading = false;
      state.editData = action.payload;
    },
    editFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setEditId: (state, action) => {
      state.editid = action.payload;
    },
  },
});

export const { startEdit, editSuccess, editFailure, setEditId } = editSlice.actions;

export default editSlice.reducer;
