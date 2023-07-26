// authSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { post } from "../../Services/ApiService"
import { loginStart, loginFailure, storeToken } from '../toolkits/authSlice';
import LocalStorageService from "../../Services/LocalStorage";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function* login(action) {
  // console.log(action)
  try {
    yield put(loginStart()); // Set loading state

    const user = yield call(post, `users/login`, action.payload); // Make the API call
    console.log(user)
    yield put(storeToken(user.data.token));
    LocalStorageService.setToken(user.data.token);
    toast.success(user.message);
    
    setTimeout(function () {
      window.location.href = '/institutes';
    }, 1000);
    // yield put(loginSuccess(user)); // Dispatch success action with user data
  } catch (error) {
    yield put(loginFailure(error.data.message)); // Dispatch failure action with error message
    console.log(error)
    toast.error(`Failed to Login: ${error.data.message}`)
  }
}

export function* watchLogin() {
  // alert("------------")
  yield takeLatest('auth/loginSuccess', login); // Replace 'auth/login' with your actual login action type
  // console.log("abc----------")
}
