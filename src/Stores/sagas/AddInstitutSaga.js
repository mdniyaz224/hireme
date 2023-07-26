import { takeLatest, call, put } from 'redux-saga/effects';
import { post } from "../../Services/ApiService";
import { addInstuiteSuccess, addInstuiteFailure } from '../toolkits/AddInstitutSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* AddInstutieData(action) {
  try {
    // const navigate = useNavigate();
    yield call(post, `institutes/add`, action.payload); // Make the API call
    yield put(addInstuiteSuccess()); // Dispatch success action

    toast.success('Institute added successfully');
    setTimeout(function () {
      window.location.href = '/institutes';
    }, 1000);

  } catch (error) {
    console.log(error.message, "error massage")
    yield put(addInstuiteFailure(error.data.message));
    toast.error(`Failed to add institute: ${error.data.message}`)
    // Dispatch failure action with error message
  }
}

export function* watchAdd() {

  yield takeLatest('institute/addInstuite', AddInstutieData);
}
