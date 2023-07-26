// apiSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from '../toolkits/displayInstituteSlice';
import { get } from '../../Services/ApiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function* fetchAPIData(action) {
  // alert("----------")
  try {
    const searchBy = action.payload ? action.payload : "";
    console.log("action.payload", action.payload);
    const response = yield call(get, `institutes?searchBy=${searchBy}`); // Make the API call using the appropriate endpoint
    console.log(response.data)
    yield put(fetchDataSuccess(response.data)); // Dispatch success action with the API data
    // toast.success(response.message);

  } catch (error) {
    // yield put(fetchDataFailure(error.data.message)); // Dispatch failure action with the error message
    toast.error(error.data.message);
  }
}

export function* watchFetchData() {

  yield takeLatest('getInstitute/fetchData', fetchAPIData);
}
