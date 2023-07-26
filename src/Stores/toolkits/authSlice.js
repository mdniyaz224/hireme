// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      // alert("aler------------")
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {

      state.user = action.payload;
      // state.loading = false;
      // state.error = null;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    forgotPasswordStart(state, action) {
      state.user = action.payload;
    },
    storeToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, storeToken } = authSlice.actions;
export default authSlice.reducer;
