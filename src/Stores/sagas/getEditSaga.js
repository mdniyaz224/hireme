// apiSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from '../toolkits/getEditSlice';
import { get } from '../../Services/ApiService';

function* fetchAPIData(action) {
  // alert("----------")
  try {
    const response = yield call(get, `institutes/getEdit/${action.payload}`); // Make the API call using the appropriate endpoint
    console.log(response.data)
    yield put(fetchDataSuccess(response.data)); // Dispatch success action with the API data
  } catch (error) {
    yield put(fetchDataFailure(error.message)); // Dispatch failure action with the error message
  }
}

export function* watchGetEditData() {

  yield takeLatest('getEditInstitute/fetchData', fetchAPIData);
}
