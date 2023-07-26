// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null,

};

const resetSlice = createSlice({
    name: 'reset',
    initialState,
    reducers: {
        resetStart(state) {
            // alert("aler------------")
            state.loading = true;
            state.error = null;
        },
        resetSuccess(state, action) {

            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        resetFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { resetStart, resetSuccess, resetFailure } = resetSlice.actions;
export default resetSlice.reducer;
