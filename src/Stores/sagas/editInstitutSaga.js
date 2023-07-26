// editSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { editSuccess, editFailure } from '../toolkits/editInstitutSlice';
import { putRequest } from '../../Services/ApiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* editData(action) {

  try {
  
    const response = yield call(putRequest, `institutes/edit/${action.payload.id}`, JSON.stringify(action.payload.formData)); // Make the API call to update the data
   console.log(response,"------------------")
    yield put(editSuccess(response.data)); // Dispatch edit success action with the updated data
    toast.success(response.message);
    setTimeout(function () {
      window.location.href = '/institutes';
    }, 1000);
    // yield put(editFailure('Failed to edit data')); // Dispatch edit failure action with error message

  } catch (error) {
    yield put(editFailure(error.message)); // Dispatch edit failure action with error message
    toast.error(error.data.message);
  }
}

export function* watchEditData() {
  yield takeLatest('editInstitute/startEdit', editData);
}
