// apiSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchData, deleteDataSuccess, deleteDataFailure } from '../toolkits/displayInstituteSlice';
import { deleteRequest } from '../../Services/ApiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function* deleteAPIData(action) {
  try {
    const response = yield call(deleteRequest, "institutes/delete", action.payload); // Make the API call to delete the item
    yield put(deleteDataSuccess()); // Dispatch delete success action
    yield put(fetchData()); // Refresh the data after successful deletion
    toast.success(response.message);




  } catch (error) {
    yield put(deleteDataFailure(error.message)); // Dispatch delete failure action with error message
    toast.success(error.data.message);
  }
}

export function* watchDeleteData() {
  yield takeLatest('getInstitute/deleteData', deleteAPIData);
}
