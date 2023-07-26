// sagas.js
import { all } from 'redux-saga/effects';
import { watchLogin } from './authSaga';
import { watchForgot } from "./forgotsaga"
import { watchReset } from "./resetSaga"
import { watchAdd } from "./AddInstitutSaga"
import {watchFetchData} from "./displayInstituteSaga"
import {watchDeleteData} from "./deleteInstituteSaga"
import { watchEditData } from "./editInstitutSaga";
import {watchGetEditData} from "./getEditSaga"
export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchForgot(),
        watchReset(),
        watchAdd(),
        watchFetchData(),
        watchDeleteData(),
        watchEditData(),
        watchGetEditData(),
        // Add more sagas here if needed
    ]);
}
