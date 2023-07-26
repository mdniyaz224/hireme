// authSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import {post} from "../../Services/ApiService"
import { forgotStart, forgotFailure } from '../toolkits/forgotSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* forget(action) {
    console.log(action)
  try {
    yield put(forgotStart()); // Set loading state
    const response =   yield call(post,`users/forget-password`, action.payload); // Make the API call
    toast.success(response.message); 
    // yield put(forgotSuccess(user)); // Dispatch success action with user data
  } catch (error) {
    yield put(forgotFailure(error.message)); // Dispatch failure action with error message
    toast.error(error.data.message);
  }
}

export function* watchForgot() {
    // alert("------------")
  yield takeLatest('forgot/forgotSuccess', forget); // Replace 'auth/login' with your actual login action type
  console.log("abc----------")
}
