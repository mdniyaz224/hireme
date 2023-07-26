// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null,
    
};

const forgotSlice = createSlice({
    name: 'forgot',
    initialState,
    reducers: {
        forgotStart(state) {
            // alert("aler------------")
            state.loading = true;
            state.error = null;
        },
        forgotSuccess(state, action) {

            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        forgotFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { forgotStart, forgotSuccess, forgotFailure } = forgotSlice.actions;
export default forgotSlice.reducer;
