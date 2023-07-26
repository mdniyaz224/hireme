// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from '../sagas/sagas';
import AddRedcure from "./AddRedcure";
import displayInstituteRedcure from "./displayInstituteRedcure"
import editInstituteRedcure from "./editInstituteRedcure"
import getEditRedcure from "./getEditRedcure";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { rootReducer, AddRedcure, displayInstituteRedcure, editInstituteRedcure, getEditRedcure },


  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
