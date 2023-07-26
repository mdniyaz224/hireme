// authSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { post } from "../../Services/ApiService"
import { resetStart, resetFailure } from '../toolkits/resetSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* resets(action) {
    console.log(action)
    try {
        yield put(resetStart()); // Set loading state
        yield call(post, `users/reset-password`, action.payload); // Make the API call
        toast.success("password reset successfully");
        setTimeout(function () {
            window.location.href = '/login';
        }, 1800);
        // yield put(resetSuccess(user)); // Dispatch success action with user data
    } catch (error) {
        yield put(resetFailure(error.message)); // Dispatch failure action with error message
        toast.success(error.data.message);
    }
}

export function* watchReset() {
    // alert("------------")
    yield takeLatest('reset/resetSuccess', resets); // Replace 'auth/login' with your actual login action type
    console.log("abc----------")
}
